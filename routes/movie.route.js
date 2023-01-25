const express = require('express')
const routes = express.Router()
const movieController = require ('../controllers/movie.controller')

routes.post('/MovieBookingApp/api/v1/',movieController.createMovie)





module.exports = {MovieRoutes : routes}