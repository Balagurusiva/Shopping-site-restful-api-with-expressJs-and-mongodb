import express from 'express'
import {createUser, login, getAllUser, getUser, deleteUser, updateUser} from '../controller/userCtrl.js'
import { authMiddleware } from '../middleware/authMiddleWare.js'

const router = express.Router()

//user registration route (create of user)
router.post('/register',createUser)
router.post('/login', login )

//get all user
router.get('/all-user', getAllUser)

//get a single user
router.get('/getUser/:id',authMiddleware,  getUser)

//delete a user
router.delete('/user/:id', deleteUser)

//update a user
router.post('/:id', updateUser)

export default router