import prisma from "@/app/api/db";
import { NextRequest, NextResponse } from "next/server";
/*export async function POST(request: Request) {

    const user = await prisma.user.create({
        data: {
            name: 'Elsa Prisma',
            authorizedYN: false
        },
    });


    return Response.json({ data : 'dfdf'});
}
export async function PUT(request: Request) {
    return Response.json({ data : 'dfdf'});
}*/

export async function GET(request: NextRequest) {

    const user = await prisma.contentsCategory.create({
        data: {
            name : 'dev',
            contentsSummary : {
                create : {
                    title : 'helleo',
                    subTitle : 'sfds',
                    userId : 1,
                    representativeImgURL : 'sdfd',
                }
            }
        },
    });

    return NextResponse.json({hello : 'sdfds'});
}

/*
export async function DELETE(request: Request) {
    return Response.json({ data : 'dfdf'});
}*/
