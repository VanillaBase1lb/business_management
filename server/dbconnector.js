var mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password_hash: String
})

module.exports = mongoose.model("User", userSchema, "users") // "users" is the collection name. mongoose automatically assigns a plural name to collection. very stupid
