import mongoose, { Schema, Document, model, models } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser{
    email: string;
    password: string;
    _id?: mongoose.Types.ObjectId
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
    {
        email:{type:String, required:true, unique: true},
        password:{type:String, required: true},
    },
    {timestamps: true,}
);

userSchema.pre("save", async function(next){  
    //this block of code only executes when password is modified, it saves the modified thing by hashing it
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,10)
    }
    next();
});

const User= models?.User|| model<IUser>("User", userSchema)

export default User
