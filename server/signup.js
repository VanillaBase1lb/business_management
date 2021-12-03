const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
let User = require("./database/dbconnector")

const saltRounds = 5

async function signupUser(req, res) {
    let username_regex = new RegExp("^[a-z0-9]+$")
    let email_regex = new RegExp(".+\@.+\..+")
    if (!username_regex.test(req.body.username)) {
        res.send("invalid username only digits and lowercase allowed")
        return
    }
    if (!email_regex.test(req.body.email)) {
        res.send("invalid email")
        return
    }
    User.exists({$or: [{username: req.body.username}, {email: req.body.email}]}, (err, doc) => {
        if (doc) {
            res.send("username or email already exists")
            return
        }
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                password_hash: hash,
                email: req.body.email,
                user_type: req.body.user_type,
                business_name: req.body.business_name
            })
            user.save().then(result => {
                console.log(result)
            })
            res.send("user signup succesfull")
            return
        })
    })

}

module.exports = signupUser
