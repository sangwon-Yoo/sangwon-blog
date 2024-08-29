import type { NextApiRequest, NextApiResponse } from 'next'
import { InternalResponseDTO } from "@/types/response";
import { ReqSaveContents } from "@/types/request";
import { put } from '@vercel/blob';
import { VERCEL_BLOB_PATH } from "../../../../constant";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import prisma from "../../db";

export default async function saveContents(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<null>>
) {

    const reqBody = req.body as ReqSaveContents;
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401).json({
            returnCode : '01',
            returnMessage: '',
            errorMessage : '로그인 필요',
            returnData : null
        });
        return;
    }

    if(req.method !== 'POST') {
        res.status(400).json({
            returnCode : '01',
            returnMessage: '',
            errorMessage : '지원하지 않는 method',
            returnData : null
        });
        return;
    }

    if(reqBody.isNewCategory) {

        if(!reqBody.categoryImgFileSrc) {
            res.status(400).json({
                returnCode : '01',
                returnMessage: '',
                errorMessage : '요청에 카테고리 이미지 파일이 존재 하지 않음',
                returnData : null
            });
            return;
        }

        try {

            await prisma.contentsCategory.create({
                data : {
                    name : reqBody.categoryName,
                    representativeImgURL : reqBody.categoryImgFileSrc,
                    contentsSummary : {
                        create : [
                            {
                                title : reqBody.contentsTitle,
                                subTitle : reqBody.contentsSummary,
                                representativeImgURL : reqBody.contentsImgFileSrc || reqBody.categoryImgFileSrc,
                                userId : session.user.id,
                                contentsData : {
                                    create : {
                                        contentsHtml : reqBody.editorRaw
                                    }
                                }
                            }
                        ]
                    }
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                returnCode : '01',
                returnMessage: '',
                errorMessage : (error instanceof Error) ? error.message : 'Unknown error',
                returnData : null
            });
            return;
        }
    } else {

        try {

            let relatedCategory;

            if(!reqBody.contentsImgFileSrc) {
                relatedCategory = await prisma.contentsCategory.findUnique({
                    where : {
                        name : reqBody.categoryName
                    },
                });
            }

            await prisma.contentsSummary.create({
                data : {
                    contentsCategory : {
                        connect : { name: reqBody.categoryName }
                    },
                    user : {
                        connect : { id : session.user.id }
                    },
                    title : reqBody.contentsTitle,
                    subTitle : reqBody.contentsSummary,
                    representativeImgURL : reqBody.contentsImgFileSrc || relatedCategory?.representativeImgURL,
                    contentsData : {
                        create: {
                            contentsHtml: reqBody.editorRaw
                        }
                    }
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                returnCode : '01',
                returnMessage: '',
                errorMessage : (error instanceof Error) ? error.message : 'Unknown error',
                returnData : null
            });
            return;
        }
    }

    res.status(200).json({
        returnCode : '00',
        returnMessage: 'ok',
        errorMessage : '',
        returnData : null
    });
}