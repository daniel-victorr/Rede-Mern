import express, { json } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import connectedDataBase from './src/dataDB/data.js'
import { config } from 'dotenv'
import userRouter from './src/routes/user.routes.js'
import productRouter from './src/routes/product.router.js'

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(json())
app.use(cookieParser())

config()
connectedDataBase()

app.use('/', userRouter)
app.use('/', productRouter)

app.listen(port, () =>{
    console.log(`rodando na port ${port}`)
})