import { DefaultSession } from "next-auth";

declare module "next-auth"{
    interface Session{
        user: {
            id:String; 
        } & DefaultSession["user"]
    }
}