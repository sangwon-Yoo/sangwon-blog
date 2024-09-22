import type { NextApiRequest, NextApiResponse } from 'next'
import {InternalResponseDTO, ResUpdateContents} from "@/types/response";
import { ReqUpdateContents } from "@/types/request";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import prisma from "../../db";

export default async function updateContents(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<ResUpdateContents>>
) {

    const reqBody = req.body as ReqUpdateContents;
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

    if(req.method !== 'PUT') {
        res.status(400).json({
            returnCode : '01',
            returnMessage: '',
            errorMessage : '지원하지 않는 method',
            returnData : null
        });
        return;
    }

    try {
        const summary = await prisma.contentsSummary.update({
            where : { id : reqBody.contentsSummaryId },
            data : {
                title : reqBody.contentsTitle,
                subTitle : reqBody.contentsSummary,
                representativeImgURL : reqBody.contentsImgFileSrc || undefined,
                contentsData : {
                    update : {
                        contentsHtml: reqBody.editorRaw
                    }
                }
            }
        });

        res.status(200).json({
            returnCode : '00',
            returnMessage: 'ok',
            errorMessage : '',
            returnData : {
                contentsSummaryId : summary.id
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