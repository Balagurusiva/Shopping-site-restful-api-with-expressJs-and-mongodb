import express from 'express'
import {createUser, login, getAllUser, getUser, deleteUser} from '../controller/userCtrl.js'

const router = express.Router()

//user registration route (create of user)
router.post('/register',createUser)
router.post('/login', login )

//get all user
router.get('/all-user', getAllUser)

//get a single user
router.get('/getUser/:id', getUser)

//delete a user
router.delete('/user/:id', deleteUser)

export default router