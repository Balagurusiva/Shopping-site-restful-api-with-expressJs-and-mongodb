import User from '../models/userModel.js'
import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) => {
    let token
    try {
        if (req?.headers?.authorization?.startsWith('Bearer')) {
            try {
                token = req.headers.authorization.split(' ')[1]
                if (token) {
                    const decode = jwt.verify(token, process.env.SECRETKEY) 
                    const user = await User.findById(decode)
                    req.user = user 
                    next()
                }
            } catch (error) {
                res.status(500).json({
                    "msg": "Unathorized access"
                })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            "msg": "Server Error"
        })
    }
} 