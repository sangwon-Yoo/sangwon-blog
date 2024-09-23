import type { NextApiRequest, NextApiResponse } from 'next'
import {InternalResponseDTO, ResSummaryList} from "@/types/response";
import prisma from "../../db";

export const config = {
    runtime: 'edge', // this must be set to `edge`
    // execute this function on iad1 or hnd1, based on the connecting client location
    regions: ['icn1', 'iad1']
};

export default async function getSummaryList(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<ResSummaryList>>
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

    try {

        const summaryList = await prisma.contentsSummary.findMany({
            orderBy : {
                updatedDate : 'desc'
            }
        });

        return res.status(200).json({
            returnCode : '00',
            returnMessage: 'ok',
            errorMessage : '',
            returnData : summaryList
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