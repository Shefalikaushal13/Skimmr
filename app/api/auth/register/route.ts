import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/utils/db";
import User from "@/models/User";


export async function POST(request: NextRequest){

    try {
        const {email,password} = await request.json()
        console.log("Incoming:", { email, password });

        if(!email || !password){
            return NextResponse.json(
                {error: "Email and password are required"},
                {status: 400}
            );
        }

        await connectToDB()
        console.log("DB connected");

      const existingUser= await User.findOne({email})
      console.log("Existing user:", existingUser);

      if(existingUser){
        return NextResponse.json(
            {error: "Email is already registered"},
            {status: 400}
        );
      }

      await User.create({
        email,
        password
      })
      console.log("New user created:", User);

      return NextResponse.json(
            {message: "User registered successfully"},
            {status: 201}
        );


    } catch (error) {
        console.error("Registration Error:", error);
        return NextResponse.json(
            {error: "Failed to register user"},
            {status: 500}
        );
        
    }
}

