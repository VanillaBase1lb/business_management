const mongoose = require("mongoose")
let User = require("./database/dbconnector")

async function apiUser(req, res) {
    const user = await User.findOne({username: req.session.userid})
    // console.log(user.username)
    const userdata = {
        username: user.username,
        user_type: user.user_type,
        email: user.email,
        business_name: user.business_name
    }
    res.setHeader('Content-Type', 'application/json')
    res.json(userdata)
}


module.exports = apiUser
