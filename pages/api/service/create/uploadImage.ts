import { put, PutBlobResult } from '@vercel/blob';
import type { NextApiResponse, NextApiRequest, PageConfig } from 'next';
import { InternalResponseDTO } from "@/types/response";

export default async function uploadImage(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<PutBlobResult>>,
) {

    let blob: PutBlobResult;

    try {

        if(!req?.body) {
            return res.status(200).json({
                returnCode: '00',
                returnMessage: 'ok',
                errorMessage: '',
                returnData: null
            });
        }

        blob = await put(req.query.savePath as string, req, {access: 'public'});

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

    return res.status(200).json({
        returnCode : '00',
        returnMessage: 'ok',
        errorMessage : '',
        returnData : blob
    });
}

export const config: PageConfig = {
    api: {
        bodyParser: false,
    },
};