import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes/routes.js';
import connectDB from './connection/connectDb.js';

const port = 9000;
const app = express();
import dotenv from 'dotenv';

dotenv.config();
const username = process.env.DB_username;
const password = process.env.DB_password;
connectDB(username,password);


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Router);

app.listen(port,()=>{
    console.log("Server Api is working with on port ",port);
})