import { app } from './app.js'
import DataBaseconnection from './db/Index.js'

//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

DataBaseconnection()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is listening on ${process.env.PORT}` );
    })
    app.on('error', (err)=>{
        console.log('error',err);
        throw  err
    })
})
.catch((err)=>{
    console.log('etting error while handling database connection');
})