import express from 'express'
import createUser from '../controller/userCtrl.js'

const router = express.Router()

//user registration route (create of user)
router.post('/register',createUser)

export default router