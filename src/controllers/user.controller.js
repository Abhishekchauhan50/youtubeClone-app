import { asynhandler } from "../utils/asyncHandler.js";


const registerUser = asynhandler( async (req, res)=>{
    res.status(200).json({
        massage: 'hello world '
    })
})

export {registerUser}