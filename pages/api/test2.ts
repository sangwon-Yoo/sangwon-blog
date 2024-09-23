import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {PageConfig} from "next";

export const config = {
    runtime: 'edge', // this must be set to `edge`
    // execute this function on iad1 or hnd1, based on the connecting client location
    regions: ['icn1', 'iad1']
};

export default function handler(request: NextRequest) {
    return NextResponse.json({
        name: `I am an Edge Function! (executed on ${process.env.VERCEL_REGION})`,
    });
}