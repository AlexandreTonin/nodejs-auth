import bcrypt from 'bcrypt'
import { UserModel } from '../models/User.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export class AuthController {
    static async register(req, res) {
        const { firstName, lastName, email, password } = req.body

        if (!firstName) {
            return res.status(422).json({ message: "First name cannot be empty" })
        }

        if (!lastName) {
            return res.status(422).json({ message: "Last name cannot be empty" })
        }

        if (!email) {
            return res.status(422).json({ message: "Email cannot be empty" })
        }

        if (!password) {
            return res.status(422).json({ message: "Password cannot be empty" })
        }

        try {
            const emailExists = await UserModel.findByEmail(email)

            if (emailExists.length > 0) {
                return res.status(422).json({ message: "Email already registered" })
            }

            const hashedPassword = await bcrypt.hashSync(password, 10)

            const newUserId = await UserModel.create(firstName, lastName, email, hashedPassword)

            const token = jwt.sign({ userId: newUserId }, process.env.JWT_SECRET, { expiresIn: '1h' })

            return res.status(201).json({ message: "Registered sucessfully", id: newUserId, token })
        } catch (error) {
            return res.status(500).json({ message: "Register failed" })
        }
    }
    static async login(req, res) {
        const { email, password } = req.body

        if (!email) {
            return res.status(422).json({ message: "Email cannot be empty" })
        }

        if (!password) {
            return res.status(422).json({ message: "Password cannot be empty" })
        }

        try {
            const user = await UserModel.findByEmail(email)

            if (user.length < 1) {
                return res.status(401).json({ message: "Invalid credentials" })
            }

            const checkPassword = await bcrypt.compareSync(password, user[0].passwordHash)

            if (!checkPassword) {
                return res.status(401).json({ message: "Invalid credentials" })
            }

            const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' })

            return res.status(200).json({ message: "Logged succesfully", token })
        } catch (error) {
            return res.status(500).json({ message: "Login failed" })
        }

    }
    static async logout(req, res) { }
}