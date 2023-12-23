import express from 'express'
import 'dotenv/config' 
import dbConnect from './config/dbConnect.js' 

import authRoute from './routes/authRoute.js'
 
const PORT = process.env.PORT || 3000
const app = express()

//body parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
 

//routes
app.use('/api/user', authRoute)


// mongoose
//     .connect(process.env.DBCONNECTIONURL)
//     .then(() => {
//         app.listen(PORT, () => {console.log("server running in ", PORT )  })
//     })
//     .catch((error) => {
//         console.log(error)
//     }) 

dbConnect()
.then(() => {
    console.log("DB connecteded ")
    app.listen(PORT, () => console.log('server runing at ',PORT))
})
.catch(()=>{
    console.log("error")
})  


