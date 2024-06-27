import  {  v2 as cloudinary } from 'cloudinary'
import  fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SEECRET,
});

const uploadonCloudinary = async(localFilePath) =>{
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        console.log('file has been uploaded successfully', response.url);
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove file from local storage when  upload got failed
    }
}