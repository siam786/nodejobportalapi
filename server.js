//package imports
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
//file imports
import connectDB from './config/db.js'
//routes
import testRoutes from './routes/testRoutes.js'
import authRoutes from './routes/userRouter.js'

//dotenv config
dotenv.config()
//connect database
connectDB()
//rest object
const app = express()

//middleware
app.use(express.json())
app.use(morgan())
app.use(cors("dev"))
//routes
app.use('/api/v1/test',testRoutes)
app.use('/api/v1/auth',authRoutes)
//port
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT, () => {
  console.log(`Node Server running ${process.env.DEV_MODE} on port no ${PORT}`.bgCyan.blue)
})
