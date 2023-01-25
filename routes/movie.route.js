const express = require('express')
const routes = express.Router()
const movieController = require ('../controllers/movie.controller')

routes.post('/MovieBookingApp/api/v1/create/Movies',movieController.createMovie)
routes.get('/MovieBookingApp/api/v1/Movies',movieController.getAllMovie)
routes.get('/MovieBookingApp/api/v1/Movies/:id',movieController.getMovie)





module.exports = {MovieRoutes : routes}