import { NextApiRequest, type NextApiResponse } from "next";
import prisma from "../db";
import { Prisma } from '@prisma/client';

export default async function createSummary(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const reqBody = req.body as Prisma.ContentsSummaryCreateInput;
    await createSummaryPrisma(reqBody);
}

export const createSummaryPrisma = async ({ title, subTitle, representativeImgURL, contentsCategory, user }: Prisma.ContentsSummaryCreateInput) => {

    try {
        return await prisma.contentsSummary.create({
            data : { title, subTitle, representativeImgURL, contentsCategory, user }
        });
    } catch(error) {
        throw error;
    }
}