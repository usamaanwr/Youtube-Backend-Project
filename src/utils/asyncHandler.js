const asyncHandler = (requestHandler)=>{
    (req , res , next)=>{
        Promise.resolve(requestHandler(res , req , next)).catch((err)=> next(err))
    }
}

// const asyncHandler = (fn)=> async(req , res , next)=>{
// try {
//     await fn(req , res, next)
// } catch (error) {
//     res.status(error.code ||500).josn({
//         succes: false,
//         message: error.message
//     })
// }
// }

export { asyncHandler}