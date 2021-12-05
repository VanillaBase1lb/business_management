const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const alert = require("alert")
let { User } = require("./database/dbconnector")

async function loginUser(req, res) {
    const user = await User.findOne({username: req.body.username})
    if (user) {
        const password_valid = await bcrypt.compare(req.body.password, user.password_hash)
        if (password_valid) {
            req.session.userid = user.username
            req.session.usertype = user.user_type
            req.session.businessname = user.business_name
            res.redirect("/")
            // res.send("user logged in")
        }
        else {
            // res.send("invalid password")
            alert("invalid password")
            res.json({msg: "invalid password"})
        }
    }
    else {
        // res.send("invalid username")
        alert("invalid username")
        res.json({msg: "invalid username"})
    }
}


module.exports = loginUser
