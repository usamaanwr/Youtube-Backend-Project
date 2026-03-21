import { Router } from "express";
import { reqisterUser } from "../controllers/user.contoller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();
router.post('/register', upload.fields([{
    name: "avatar",
    maxCount: 1
},{
    name: "coverImage",
    maxCount: 1
}
]),
reqisterUser)

export default router