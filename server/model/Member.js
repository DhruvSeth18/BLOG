import mongoose from "mongoose";

const Member = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})
const HackMember = mongoose.model('hackMember',Member);

export default HackMember;