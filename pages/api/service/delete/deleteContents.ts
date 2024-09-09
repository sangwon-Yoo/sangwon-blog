import type { NextApiRequest, NextApiResponse } from 'next'
import {InternalResponseDTO, ResUpdateContents} from "@/types/response";
import { ReqUpdateContents} from "@/types/request";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import prisma from "../../db";
import {getZeroIndexString} from "@/functions/utils";
import {QUERY_PARAM} from "@/const/queryParam";
import {QUERY_KEY} from "@/const/queryKey";
import {del} from "@vercel/blob";

export default async function deleteContents(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<null>>
) {

    const contentsSummaryId = Number(getZeroIndexString(req.query[QUERY_PARAM.contentsSummaryId]));
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

    if(req.method !== 'DELETE') {
        res.status(400).json({
            returnCode : '01',
            returnMessage: '',
            errorMessage : '지원하지 않는 method',
            returnData : null
        });
        return;
    }

    try {
        await prisma.contentsSummary.delete({
            where : { id : contentsSummaryId }
        });

        res.status(200).json({
            returnCode : '00',
            returnMessage: 'ok',
            errorMessage : '',
            returnData : null
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