import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../db";
import { Prisma } from "@prisma/client";
import { ResponseDTO } from "@/types/api/res";
import { ReqSaveContents } from "@/types/api/req";

export default async function saveContents(
    req: NextApiRequest,
    res: NextApiResponse<ResponseDTO<null>>
) {

    let reqBody = req.body as ReqSaveContents;

    if(reqBody.categoryImgFile) {

    }

    try {
       // categoryList = await prisma.contentsCategory.findMany({

        //});
        //console.error(categoryList);
        res.status(200).json({
            returnCode : '00',
            returnMessage: '저장되었습니다.',
            errorMessage : '',
            returnData : null
        });

    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(e);
        } else {
            console.error(`Unknown Error : `);
            console.error(e);
        }
    }
}