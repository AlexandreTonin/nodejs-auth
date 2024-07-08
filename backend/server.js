import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { verifyJwt } from './middlewares/verifyJwt.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(morgan('tiny'))

app.use('/', authRoutes)
app.use('/', userRoutes)

app.get('/', verifyJwt, (req, res) => {
    res.json({ message: 'Server is running...' })
})

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log('Server is running on port', process.env.SERVER_PORT || 3000)
})