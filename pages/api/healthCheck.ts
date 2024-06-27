import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function healthCheck(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    res.status(200).json({ message: `Hello from Sangwon's Blog!` });
}