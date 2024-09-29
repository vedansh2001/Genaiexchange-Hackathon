import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index:true      //index is used whenever you want to impliment searching.
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type:String,      //cloudinary URL
        required: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
    
},
{
    timestamps: true
})

export const User = mongoose.model("User", userSchema)