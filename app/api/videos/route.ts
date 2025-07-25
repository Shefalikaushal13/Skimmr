import Video, { IVideo } from "@/models/Video";
import { authOptions } from "@/utils/auth";
import { connectToDB } from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        await connectToDB()
        const videos= await Video.find({}).sort({createdAt: -1}).lean()   //convert the result to plain JavaScript objects using lean
        if(!videos || videos.length===0){
            return NextResponse.json([],{status:200})
        }

        return NextResponse.json(videos)

    } catch {
        return NextResponse.json(
            {error: "Failed to fetch videos"},
            {status: 200}
        )
    }
    
}

export async function POST(request: NextRequest){
    try {
        const session= await getServerSession(authOptions)
        if(!session){
            return NextResponse.json(
                {error:"Unauthorized"},
                {status: 401}
            )
        }

        await connectToDB()
        const body:IVideo= await request.json()

        if(
            !body.title ||
            !body.description ||
            !body.videoUrl ||
            !body.thumbnailUrl
        ) {
            return NextResponse.json(
                {error: "Missing required fields"},
                {status: 400}
            );
        }

        const videoData={
            ...body,
            controls: body.controls??true,
            transformation:{
                height: 1920,
                width: 1080,
                quality: body.transformation?.quality ?? 100
            }
        }

        const newVideo= await Video.create(videoData)
        return NextResponse.json(newVideo)
    
    } catch {
       return NextResponse.json(
            {error: "Failed to add a video"},
            {status: 200}
        ) 
    }
}