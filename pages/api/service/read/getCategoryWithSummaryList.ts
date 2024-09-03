import type { NextApiRequest, NextApiResponse } from 'next'
import {InternalResponseDTO, ResCategoryList, ResCategoryWithSummaryList} from "@/types/response";
import prisma from "../../db";

export default async function getCategoryList(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<ResCategoryWithSummaryList>>
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
            orderBy : {
                name : 'asc'
            },
            include : {
                contentsSummary : {
                    orderBy : {
                        updatedDate : 'desc'
                    }
                }
            }
        });

        res.status(200).json({
            returnCode : '00',
            returnMessage: 'ok',
            errorMessage : '',
            returnData : categoryList.map(category => {
                return {
                    categoryName : category.name,
                    summaryList : category.contentsSummary.map(summary => {
                        return {
                            id : summary.id,
                            contentsName : summary.title
                        };
                    })
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