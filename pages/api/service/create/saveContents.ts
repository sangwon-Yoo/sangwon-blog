import type { NextApiRequest, NextApiResponse } from 'next'
import { ResponseDTO } from "@/types/response";
import { ReqSaveContents } from "@/types/request";
import { put } from '@vercel/blob';
import { VERCEL_BLOB_PATH } from "../../../../constant";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import prisma from "../../db";

export default async function saveContents(
    req: NextApiRequest,
    res: NextApiResponse<ResponseDTO<null>>
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

    if(reqBody.isNewCategory) {

        if(!reqBody.categoryImgFile) {
            res.status(400).json({
                returnCode : '01',
                returnMessage: '',
                errorMessage : '요청에 카테고리 이미지 파일이 존재 하지 않음',
                returnData : null
            });
            return;
        }

        try {
            let uploadedCategoryImg = await put(
                `${VERCEL_BLOB_PATH.category}/${reqBody.categoryName}/${reqBody.categoryImgFile.name}`,
                reqBody.categoryImgFile,
                { access : 'public' }
            );

            let uploadedContentsImg;
            if(reqBody.contentsImgFile) {
                uploadedContentsImg = await put(
                    `${VERCEL_BLOB_PATH.category}/${reqBody.categoryName}/${VERCEL_BLOB_PATH.contents}/${reqBody.contentsImgFile.name}`,
                    reqBody.contentsImgFile,
                    { access : 'public' }
                );
            } else {
                uploadedContentsImg = uploadedCategoryImg;
            }

            await prisma.contentsCategory.create({
                data : {
                    name : reqBody.categoryName,
                    representativeImgURL : uploadedCategoryImg.url,
                    contentsSummary : {
                        create : [
                            {
                                title : reqBody.contentsTitle,
                                subTitle : reqBody.contentsSummary,
                                representativeImgURL : uploadedContentsImg.url,
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
            let uploadedContentsImg;
            let contentsSummeryImgURL;

            if(reqBody.contentsImgFile) {
                uploadedContentsImg = await put(
                    `${VERCEL_BLOB_PATH.category}/${reqBody.categoryName}/${VERCEL_BLOB_PATH.contents}/${reqBody.contentsImgFile.name}`,
                    reqBody.contentsImgFile,
                    { access : 'public' }
                );

                contentsSummeryImgURL = uploadedContentsImg.url;
            } else {

                const category = await prisma.contentsCategory.findUnique({
                    where : {
                        name : reqBody.categoryName
                    }
                });

                contentsSummeryImgURL = category?.representativeImgURL || '';
                if(!contentsSummeryImgURL) throw Error(`Category ${category} or Category Img URL not found`);
            }

            await prisma.contentsSummary.create({
                data : {
                    categoryName : reqBody.categoryName,
                    title : reqBody.contentsTitle,
                    subTitle : reqBody.contentsSummary,
                    representativeImgURL : contentsSummeryImgURL,
                    userId : session.user.id,
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