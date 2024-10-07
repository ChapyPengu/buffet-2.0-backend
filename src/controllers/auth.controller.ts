import { Request, Response } from "express";
import database from "../database/database";
import { createAccesToken, verifyAccesToken } from '../libs/jwt'

class MealController {

  static async login(request: Request, response: Response) {
    const { username, password } = request.body
    const user = await database.user.findFirst({
      where: {
        username,
        password
      }
    })
    if (user) {
      const token = await createAccesToken(user)
      response.cookie('token', token)
      response.status(200).json(user)
    } else {
      response.status(400).json({ message: 'User not valid' })
    }
  }

  static async register(request: Request, response: Response) {
    const { username, password } = request.body
    const user = await database.user.findFirst({
      where: {
        username
      }
    })
    if (!user) {
      const newUser = await database.user.create({
        data: {
          username,
          password
        }
      })
      const token = await createAccesToken(newUser)
      response.cookie('token', token)
      response.status(200).json(user)
    } else {
      response.status(400).json({ message: 'User alerdy exists' })
    }
  }

  static async logout(request: Request, response: Response) {
    response.cookie('token', '', {
      expires: new Date(0)
    })
    response.status(200).json({ message: 'success' })
  }

  static async verify(request: Request, response: Response) {
    const { token } = request.cookies
    console.log(token)
    if (!token) {
      response.status(400).json({ message: 'Not valid' })
      return
    }
    const user = await verifyAccesToken(token)
    response.status(200).json(user)
  }
}

export default MealController