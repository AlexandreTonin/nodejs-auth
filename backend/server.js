import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.json({ message: 'Server is running...' })
})

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log('Server is running on port', process.env.SERVER_PORT || 3000)
})