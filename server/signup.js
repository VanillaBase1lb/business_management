const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const alert = require("alert")
let { User } = require("./database/dbconnector")

const saltRounds = 5

async function signupUser(req, res) {
    let username_regex = new RegExp(/^[a-z0-9]+$/)
    let email_regex = new RegExp(/^.+\@.+\..+$/)
    if (!username_regex.test(req.body.username)) {
        // res.send("invalid username only digits and lowercase allowed")
        alert("invalid username only digits and lowercase allowed")
        res.json({msg: "invalid username only digits and lowercase allowed"})
        return
    }
    if (!email_regex.test(req.body.email)) {
        // res.send("invalid email")
            alert("invalid email")
            res.json({msg: "invalid email"})
        return
    }
    // PENDING multiple owners/managers for same business cannot exist
    User.exists({$or: [{username: req.body.username}, {email: req.body.email}]}, (err, doc) => {
        if (doc) {
            // res.send("username or email already exists")
            alert("username, email or business name already exists")
            res.json({msg: "username, email or business name already exists"})
            return
        }
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            const user = new User({
                // _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                password_hash: hash,
                email: req.body.email,
                user_type: req.body.user_type,
                business_name: req.body.business_name,
                confirmed: false
            })
            user.save().then(result => {
                // console.log(result)
            })
            req.session.userid = user.username
            req.session.usertype = user.user_type
            req.session.businessname = user.business_name
            // console.log(req.session.usertype)
            res.redirect("/")
            return
        })
    })

}

module.exports = signupUser
