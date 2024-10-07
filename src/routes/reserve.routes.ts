import { Router } from "express";
import ReserveController from "../controllers/reserve.controller";

const router = Router()

router.post('/', ReserveController.postReserve)

export default router