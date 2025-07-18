import mongoose, { Schema, Document, model, models } from "mongoose";

export const VIDEO_DIMENSIONS ={  //only reel format is allowed
    width:1080,
    height: 1920
} as const

export interface IVideo{
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;  //we will upload the video on a thirdparty solution imagekit which will only return the URL
    thumbnailUrl: string;
    controls?: boolean;
    transformation?:{
        height: number
        width: number;
        quality?: number
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const videoSchema = new Schema<IVideo>({
    title: {type: String, required: true},
    description: {type:String, required: true},
    videoUrl: {type:String, required: true},
    thumbnailUrl: {type:String, required: true},
    controls: {type:Boolean, deafult: true},
    transformation: {
        height: {type: Number, default: VIDEO_DIMENSIONS.height},
        width: {type: Number, default: VIDEO_DIMENSIONS.width},
        quality: {type: Number, min: 1, max: 100}
    }
},{timestamps: true})

const Video= models?.Video|| model<IVideo>("Video", videoSchema)

export default Video