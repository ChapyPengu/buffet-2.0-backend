import { Request, Response } from "express"
import database from "../database/database"
import { KEY_WORDS } from "../config/config"

class ReserveController {

  static async postReserve(request: Request, response: Response) {
    const { userId, date, time, meals } = request.body
    const keyWord = KEY_WORDS[Math.floor(Math.random() * KEY_WORDS.length - 1)]
    try {
      const reserve = await database.reservation.create({
        data: {
          userId,
          meals,
          date,
          time,
          keyWord
        }
      })
      response.status(200).json(reserve)
    } catch (error) {
      response.status(400).json({ message: 'Server error' })
    }

  }
}

export default ReserveController