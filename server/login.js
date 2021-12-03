const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
let User = require("./database/dbconnector")

async function loginUser(req, res) {
    const user = await User.findOne({username: req.body.username})
    if (user) {
        const password_valid = await bcrypt.compare(req.body.password, user.password_hash)
        if (password_valid) {
            req.session.userid = req.body.username
            req.session.usertype = req.body.user_type
            res.send("user logged in")
            // PENDING redirect to dashboard/home page
        }
        else {
            res.send("invalid password")
        }
    }
    else {
        res.send("invalid username")
    }
}


module.exports = loginUser
