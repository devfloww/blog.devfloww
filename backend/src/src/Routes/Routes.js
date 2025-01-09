// All backends routes
// Importing dependencies
import express from "express"

// Routes handlers object
const Router = express.Router()

// Endpoints
// 404 NotFound endpoint
Router.all('*', (req, res, next) => {
    res.status(404).json({
        "error": "Invalid Endpoint. Check and try again"
    })
})


export {
    Router
}