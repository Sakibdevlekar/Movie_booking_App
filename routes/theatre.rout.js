const express = require('express')
const routes = express.Router()
const theatreController = require('../controllers/theatre.controller')



routes.post('/MovieBookingApp/api/v1/theaters',theatreController.createTheatre );
routes.get('/MovieBookingApp/api/v1/theaters',theatreController.getAllTheatre );


module.exports = {TheatreRoutes : routes}
