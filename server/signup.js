let User = require("./dbconnector")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const saltRounds = 5

function signupUser(req, res) {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            password_hash: hash
        })
        user.save().then(result => {
            console.log(result)
        })
        res.send("got it")
    })

}

module.exports = signupUser
