import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const DataBaseconnection = async ()=>{
    try {
        const connectionIntance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        console.log(`conection host ${connectionIntance.connection.host}`);
        
        
    } catch (error) {
        console.log('error while connection :', error);
        process.exit(1)
    }
}

export default DataBaseconnection;