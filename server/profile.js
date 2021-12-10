const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const alert = require("alert")
let { User } = require("./database/dbconnector")

const saltRounds = 5

async function apiProfile(req, res) {
    let username_regex = new RegExp(/^[a-z0-9]+$/)
    let email_regex = new RegExp(/^.+\@.+\..+$/)
    let password_length = 3
    if (!username_regex.test(req.body.username)) {
        alert("invalid username only digits and lowercase allowed")
        res.json({msg: "invalid username only digits and lowercase allowed"})
        return
    }
    if (!email_regex.test(req.body.email)) {
        alert("invalid email")
        res.json({msg: "invalid email"})
        return
    }
    if (req.body.password.length < password_length) {
        alert("password too short")
        res.json({msg: "password too short"})
        return
    }
    // PENDING multiple owners/managers for same business cannot exist
    User.find({$or: [{username: req.body.username}, {email: req.body.email}]}, (err, doc) => {
        for (let i = 0; i < doc.length; i++) {
            if (doc[i].username != req.session.userid) {
                alert("username or email already exists")
                res.json({msg: "username or email already exists"})
                return
            }
        }
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            User.findOneAndUpdate({username: req.session.userid}, {
                username: req.body.username,
                password_hash: hash,
                email: req.body.email
            }, {new: true}, (err, doc) => {
                alert("Please log back in")
                req.session.destroy()
                res.redirect("/")
            })
            return
        })
    })

}

module.exports = {
    apiProfile
}
