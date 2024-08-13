import { put, PutBlobResult } from '@vercel/blob';
import type { NextApiResponse, NextApiRequest, PageConfig } from 'next';
import { InternalResponseDTO, ResUploadBlob } from "@/types/response";

export default async function uploadImage(
    req: NextApiRequest,
    res: NextApiResponse<InternalResponseDTO<ResUploadBlob>>,
) {

    let blob: PutBlobResult;

    try {
        /*if(!req.body) {
            console.log('hihihihihihihi');
            return res.status(200).json({
                returnCode: '00',
                returnMessage: 'nothing to save',
                errorMessage: '',
                returnData: null
            });
        }
        console.log('hihihihihihihi@@@@@@@@@@@@@@');*/

        blob = await put(req.query.savePath as string, req, { access: 'public' });

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
        returnData : {
            blobUrl : blob.url,
        }
    });
}

export const config: PageConfig = {
    api: {
        bodyParser: false,
    },
};