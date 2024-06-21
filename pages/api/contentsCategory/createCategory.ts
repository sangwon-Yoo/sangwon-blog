import { NextApiRequest, type NextApiResponse } from "next";
import prisma from "../db";
import { Prisma } from '@prisma/client';

export default async function createCategory(
    req: NextApiRequest,
    res: NextApiResponse
) {

    createCategoryPrisma({name : 'dsfds', representativeImgURL : 'sdfds' });
}

export const createCategoryPrisma = async ({ name, representativeImgURL, createdDate }: Prisma.ContentsCategoryCreateInput) => {

    try {
        return await prisma.contentsCategory.create({
            data : { name, representativeImgURL, createdDate }
        });
    } catch(error) {
        console.error(error);
    }
}