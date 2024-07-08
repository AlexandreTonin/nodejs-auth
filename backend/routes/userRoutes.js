import express from 'express'
import { UserController } from '../controllers/UserController.js'
import { verifyJwt } from '../middlewares/verifyJwt.js'

const router = express.Router()

router.get('/profile', verifyJwt, UserController.profile)
router.put('/resetPassword', verifyJwt, UserController.resetPassword)
router.post('/uploadAvatar', verifyJwt, UserController.uploadAvatar)
router.get('/users', verifyJwt, UserController.getUsers)

export default router