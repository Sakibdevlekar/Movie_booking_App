const express = require('express')
const routes = express.Router()
const authController = require('../controllers/auth.controller')

routes.post('/MovieBookingApp/api/v1/signUp',authController.signUp)
routes.post('/MovieBookingApp/api/v1/signIn', authController.signIn)

module.exports = {AuthRoutes : routes}