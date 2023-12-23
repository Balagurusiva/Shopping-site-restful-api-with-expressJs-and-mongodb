import mongoose from "mongoose"

const url = process.env.DBCONNECTIONURL

const dbConnect = () =>  mongoose.connect(url) 

export default dbConnect