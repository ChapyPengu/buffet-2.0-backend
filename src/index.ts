import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import mealRoutes from './routes/meal.routes'
import reserveRoutes from './routes/reserve.routes'
import authRoutes from './routes/auth.routes'

import database from './database/database'
import { meals } from './data/meals'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/api/meal', mealRoutes)
app.use('/api/reserve', reserveRoutes)
app.use('/api/auth', authRoutes)

// async function addMeals() {
//   const result = await database.meal.createMany({
//     data: [{
      
//     }]
//   })
// }

// async function main() {
//   try {

//   } catch (error) {
//     console.log(error)
//   }
// }

app.listen(PORT, () => {
  console.log('Server on port', PORT)
})