import type { NextApiRequest, NextApiResponse } from 'next'
import {InternalResponseDTO, ResCategoryList, ResContents} from "@/types/response";
import prisma from "../../db";
import {getZeroIndexString} from "@/functions/utils";
import {QUERY_PARAM} from "@/const/queryParam";

export default async function getContents(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<ResContents>>
) {

    if(req.method !== 'GET') {
        res.status(400).json({
            returnCode : '01',
            returnMessage: '',
            errorMessage : '지원하지 않는 method',
            returnData : null
        });
        return;
    }

    const contentsSummaryId = getZeroIndexString(req.query[QUERY_PARAM.contentsSummaryId]);

    try {

        const contents = await prisma.contentsSummary.findUnique({
            where : {
                id : Number(contentsSummaryId)
            },
            include : {
                contentsData : true
            }
        });

        return res.status(200).json({
            returnCode : '00',
            returnMessage: 'ok',
            errorMessage : '',
            returnData : {
                categoryName : contents?.categoryName || '',
                title : contents?.title || '',
                subTitle : contents?.subTitle || '',
                representativeImgURL : contents?.representativeImgURL || null,
                createdDate : contents?.createdDate || null,
                updatedDate : contents?.updatedDate || null,
                contentsData : contents?.contentsData || null
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