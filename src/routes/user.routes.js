import { Router } from "express";
import { reqisterUser } from "../controllers/user.contollers.js";

const router = Router();
router.post('/register', reqisterUser)

export default router