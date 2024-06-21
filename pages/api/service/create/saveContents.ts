import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from "@prisma/client";
import { ResponseDTO } from "@/types/response";
import { ReqSaveContents } from "@/types/request";
import { put, PutBlobResult } from '@vercel/blob';
import { createCategoryPrisma } from "../../contentsCategory/createCategory";
import { VERCEL_BLOB_PATH } from "../../../../constant";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function saveContents(
    req: NextApiRequest,
    res: NextApiResponse<ResponseDTO<null>>
) {

    const reqBody = req.body as ReqSaveContents;
    const session = await getServerSession(req, res, authOptions);

    let uploadedCategoryImg: PutBlobResult | null = null;
    let uploadedContentsImg: PutBlobResult | null = null;

    if(session) {
        if (!session) {
            res.status(401).json({
                returnCode : '01',
                returnMessage: '',
                errorMessage : '로그인 필요',
                returnData : null
            })
            return
        }
    }
    else if(reqBody.isNewCategory) {

        if(!reqBody.categoryImgFile) {
            res.status(400).json({
                returnCode : '01',
                returnMessage: '',
                errorMessage : '요청에 카테고리 이미지 파일이 존재 하지 않음',
                returnData : null
            });
            return;
        }
        try {
            const uploadedCategoryImg = await put(
                `${VERCEL_BLOB_PATH.category}${reqBody.categoryImgFile.name}`,
                reqBody.categoryImgFile,
                { access : 'public' }
            );

            createCategoryPrisma({
                name : reqBody.categoryName,
                representativeImgURL : uploadedCategoryImg.url
            });
        } catch (error) {
            console.error(error);
        }
    }

    //콘텐츠 서머리 저장
    //콘텐츠 데이터 저장

    try {
        if(reqBody.categoryImgFile) {
            uploadedCategoryImg = await put(
                reqBody.categoryImgFile.name,
                reqBody.categoryImgFile,
                { access : 'public' }
            );
        }
        if(reqBody.contentsImgFile) {
            uploadedContentsImg = await put(
                reqBody.contentsImgFile.name,
                reqBody.contentsImgFile,
                { access : 'public' }
            );
        }
    } catch (error) {

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