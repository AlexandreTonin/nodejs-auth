import express from 'express'
import { UserController } from '../controllers/UserController.js'

const router = express.Router()

router.get('/profile', UserController.profile)
router.put('/resetPassword', UserController.resetPassword)
router.post('/uploadAvatar', UserController.uploadAvatar)
router.get('/users', UserController.getUsers)

export default router