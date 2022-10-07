import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';




const app=express();


// middleware
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))

dotenv.config()


// usage of routes
app.use('/auth',AuthRoute)

mongoose.connect(process.env.MONGO_DB).then(()=>app.listen(process.env.PORT,()=>console.log(`Listening at ${process.env.PORT}`))).catch((error)=>console.log(error));