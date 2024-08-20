import type { NextApiRequest, NextApiResponse } from 'next'
import { InternalResponseDTO, ResCategoryList } from "@/types/response";
import prisma from "../../db";

export default async function saveContents(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<ResCategoryList>>
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

        const categoryList = await prisma.contentsCategory.findMany({
            orderBy :  {
                name : 'asc'
            }
        });

        res.status(200).json({
            returnCode : '00',
            returnMessage: 'ok',
            errorMessage : '',
            returnData : categoryList.map(category => {
                return {
                    categoryName : category.name
                };
            })
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