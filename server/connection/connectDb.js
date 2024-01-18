import mongoose, { connect } from "mongoose";


const connectDB = async (username,password)=>{
    try{
        console.log("connection is success");
        return await mongoose.connect(`mongodb+srv://${username}:${password}@mernflipkart.pylbhdn.mongodb.net/?retryWrites=true&w=majority`);
    }
    catch(error){
        console.log("there is an error with the connection of Database",error.message);
    }
}

export default connectDB;