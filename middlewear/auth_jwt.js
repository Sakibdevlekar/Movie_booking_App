const jwt = require('jsonwebtoken')
require('dotenv').config();
const User = require('../models/user.model')


const verifyToken = (req, res, next) => {

    let token = req.headers['x-access-token']

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        })
    }

    jwt.verify(token, process.env.SECRET_KEY,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!"
                })
            }
            req.body.userId = decoded.userId
            next()
        })

}

module.exports = {
    verifyToken: verifyToken
}