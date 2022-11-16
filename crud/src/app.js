import express from 'express'
import morgan from 'morgan'
const bodyParser = require('body-parser')
import cors from 'cors'

//Router
import languageRoutes from "./routes/language.routes"


const app = express()

//views
//app.set("views","./views")
//app.set("view engine", "ejs")

//settings
app.set("port", 3000)

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(cors())

//Poner en uso las rutas
app.use("/api/languages", languageRoutes)

export default app



