import HackMember from "../model/Member.js";
export const MemberSign =async (request,response)=>{
    try{
        const user = request.body;
        const newuser = new HackMember(user);
        await newuser.save();
        return response.status(201).json({message:'site is working'});
    }
    catch(error){
        console.log("Error in the server while ",error);
        return response.status(400).json({message:'error while creating new user'});
    }
}