import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const router = Router()

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.post('/logout', AuthController.logout)
router.post('/verify', AuthController.verify)

export default router