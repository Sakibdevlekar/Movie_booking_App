const User = require('../models/user.model')
require('dotenv').config();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function signUp(req,res){

    const userObj = {
        name: req.body.name,
        userId: req.body.userId,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }
    try {
        const userCreated = await User.create(userObj)
        const postResponse = {
            name: userCreated.name,
            userId: userCreated.userId,
            email: userCreated.email,
            createdAt: userCreated.createdAt,
            updatedAt: userCreated.updatedAt
        }
        res.status(201).send(postResponse)
    }
    catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message: "Some internal error while inserting the element"})
    }
}

async function signIn(req,res){
    const user = await User.findOne({ userId: req.body.userId })
    console.log("SignIn Request for ", user)

    if (!user) {
        res.status(400).send({
            message: "Failed! UserId doesn't exist!"
        })
        return
    }

    let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    )

    if (!passwordIsValid) {
        res.status(401).send({
            message: "Invalid Password!"
        })
        return
    }

    let token = jwt.sign({ userId: user.userId }, process.env.SECRET_KEY, {
        expiresIn: 86400 // 24 hours
    })

    res.status(200).send({
        name: user.name,
        userId: user.userId,
        email: user.email,
        accessToken: token
    })
}


module.exports = {signUp,signIn}