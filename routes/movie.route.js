const express = require('express')
const routes = express.Router()
const movieController = require ('../controllers/movie.controller')
const MovieRequestValidator= require('../middlewear/validateMovieRequest')

routes.post('/MovieBookingApp/api/v1/create/Movies',[MovieRequestValidator.validateMovieRequest],movieController.createMovie)
routes.get('/MovieBookingApp/api/v1/Movies',movieController.getAllMovie)
routes.get('/MovieBookingApp/api/v1/Movies/:id',movieController.getMovie)
routes.put('/MovieBookingApp/api/v1/Movies/:id',movieController.updateMovie)
routes.delete('/MovieBookingApp/api/v1/Movies/:id',movieController.deleteMovie)



module.exports = {MovieRoutes : routes}