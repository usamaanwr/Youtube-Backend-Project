import {asyncHandler} from "../utils/asyncHandler.js"

const reqisterUser =asyncHandler(async (req , res) => {
    res.status(200).json({
        message : "User Registered Succesfully"
    })
})

export {reqisterUser}