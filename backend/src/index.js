// Back-end of the blog | portfolio site

// Importing dependencies
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import morgan from "morgan"
// Importing dependent files
import { Router } from "./src/Routes/Routes.js"

// Constants and Globals
const port = process.env.PORT ?? 3000
const app = express()

// Middlewares
app.use(express.json()) // use json
app.use(morgan('dev'))
if (process.env.APP_STATE === 'dev') {
    app.use(morgan('dev'))
} else {
    app.use(morgan('combined'))
}

// Routes
app.use('/', Router)

// Server app init
app.listen(port, console.log(`Backend server running on port: ${port}`))