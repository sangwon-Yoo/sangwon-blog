import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../db";
import { Prisma } from "@prisma/client";

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    let categoryList;

    try {
        categoryList = await prisma.contentsCategory.findMany({

        });
        console.error(categoryList);
        res.status(200).json({ message: 'Hello from Next.js!',  })
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(e);
        } else {
            console.error(`Unknown Error : `);
            console.error(e);
        }
    }
}