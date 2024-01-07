import express from 'express'
import {createUser, login} from '../controller/userCtrl.js'

const router = express.Router()

//user registration route (create of user)
router.post('/register',createUser)
router.post('/login', login )

export default router