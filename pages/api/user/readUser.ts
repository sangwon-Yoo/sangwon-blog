import type {NextApiRequest, NextApiResponse} from "next";
import prisma from "../db";
import { Prisma } from "@prisma/client";
import type { User } from '@prisma/client'

export default async function readUser(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const user = await prisma.user.findUnique({
            where : {
                id : '104706220114838631947'
            }
        });
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