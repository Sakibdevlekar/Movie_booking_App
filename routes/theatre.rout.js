const express = require('express')
const routes = express.Router()
const theatreController = require('../controllers/theatre.controller')



routes.post('/MovieBookingApp/api/v1/theaters',theatreController.createTheatre );
routes.get('/MovieBookingApp/api/v1/theaters',theatreController.getAllTheatre );
routes.get('/MovieBookingApp/api/v1/theater/:id',theatreController.getTheatre );
routes.delete('/MovieBookingApp/api/v1/theater/:id',theatreController.deleteTheatre );
routes.put('/MovieBookingApp/api/v1/theater/:id',theatreController.updateTheatre);
routes.put('/MovieBookingApp/api/v1/theater/:theaterId/movies',theatreController.AddMoviesToTheater);

module.exports = {TheatreRoutes : routes} 
