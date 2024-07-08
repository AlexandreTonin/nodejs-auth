import { UserModel } from "../models/User.js";

export class UserController {
    static async profile(req, res) {
        const userId = req.userId

        try {
            const user = await UserModel.findById(userId)
            return res.json(user)
        } catch (error) {
            return res.status(500).json({ message: 'Failed to get user profile' })
        }
    }
    static async resetPassword(req, res) {
        const { userId, newPassword } = req.body

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' })
        }

        if (!newPassword) {
            return res.status(400).json({ message: 'New password is required' })
        }

        try {
            UserModel.updatePassword(userId, newPassword)
            return res.json({ message: 'Password reset successfully' })
        } catch (error) {
            return res.status(500).json({ message: 'Failed to reset password' })
        }
    }
    static async uploadAvatar(req, res) { }
    static async getUsers(req, res) {
        try {
            const users = await UserModel.findAll()
            return res.json(users)
        } catch (error) {

        }
    }
}