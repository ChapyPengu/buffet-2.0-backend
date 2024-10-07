import { Router } from "express";
import MealController from "../controllers/meal.controller";

const router = Router()

router.get('/chefs-recommendation', MealController.getChefsRecommendation)
router.get('/meal-of-the-day', MealController.getMealOfTheDay)

export default router