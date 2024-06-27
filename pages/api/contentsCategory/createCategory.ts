import { NextApiRequest, type NextApiResponse } from "next";
import prisma from "../db";
import { Prisma } from '@prisma/client';

export default async function createCategory(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const reqBody = req.body as Prisma.ContentsCategoryCreateInput;
    await createCategoryPrisma(reqBody);
}

export const createCategoryPrisma = async ({ name, representativeImgURL, createdDate }: Prisma.ContentsCategoryCreateInput) => {

    try {
        return await prisma.contentsCategory.create({
            data : { name, representativeImgURL, createdDate }
        });
    } catch(error) {
        throw error;
    }
}