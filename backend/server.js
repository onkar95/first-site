const express = require('express')
const app =express()
const mongoose =require('mongoose')
const dotenv= require('dotenv')
const rotueUrl =require('./routes/routes')
const cors = require('cors')



dotenv.config()


mongoose.connect(process.env.DATABASE,()=>{console.log('Database connected');})



app.use(express.json())
app.use(cors())
app.use('/app',rotueUrl)
app.listen(4000, () => console.log('server is started'))