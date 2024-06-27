const asynhandler = (requestHandler)=>{
    return  (req, res, next)=>{
        Promise.resolve(requestHandler(req, res ,next))
        .catch((error)=>{
            next(error)
        })
    }
}

export  {asynhandler }

// const asynhandler = (requestHandler)= async (req, res ,next)=>{
//     try {
//         await requestHandler(req, res ,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             massage: error.massage
//         })
//     }
// }