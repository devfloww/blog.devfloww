// All backends routes
// Importing dependencies
import express from "express"

// Importing Controller functions
import {
    Return404,
} from "../Controllers/Controllers.js"

// Routes handlers object
const Router = express.Router()

// Endpoints
// 404 NotFound endpoint
Router.all('*', Return404)

export {
    Router
}