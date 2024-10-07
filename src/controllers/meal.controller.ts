import { Request, Response } from "express";
import database from "../database/database";

class MealController {

  static async getChefsRecommendation(request: Request, response: Response) {
    const meals = await database.meal.findMany()
    response.status(200).json(meals)
  }

  static async getMealOfTheDay(request: Request, response: Response) {
    const meals = await database.meal.findMany()
    response.status(200).json(meals)
  }
}

export default MealController