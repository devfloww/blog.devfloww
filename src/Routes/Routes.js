// All backends routes
// Importing dependencies
import express from "express"

// Importing Controller functions
import {
    Return404,
    Home
} from "../Controllers/Controllers.js"

// Routes handlers object
const Router = express.Router()

// Endpoints
// 404 NotFound endpoint
Router.get('/not', Return404)

// Home page
Router.get('/', Home)

export {
    Router
}