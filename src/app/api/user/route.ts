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

    const user = await prisma.contentsSummary.create({
        data: {
            categoryName : 'sdf',
            useId : 2,
            title : 'hello',
            subTitle : 'dfsdfs',
            representativeImgURL : '/base/sdf/sdf.jpeg',
            /*contentsCategory : {
                create : {
                    name : 'sdf',
                    createdDate : '2021-12-30'
                }
            }*/
        },
    });

    return NextResponse.json({hello : 'sdfds'});
}

/*
export async function DELETE(request: Request) {
    return Response.json({ data : 'dfdf'});
}*/
