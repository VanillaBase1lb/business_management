var mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        match: [/^[a-z0-9]+$/, 'invalid username'],
        unique: true,
        required: true,
        
    },
    password_hash: String,
    email: {
        type: String,
        trim: true,
        match: [/.+\@.+\..+/, 'invalid email'],
        unique: true
    },
    user_type: Number,
    business_name: String,
    confirmed: Boolean, // PENDING review whether to add or not
})

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    business_name: String,
    product_name: String,
    product_cost: Number
})

const usermodel = mongoose.model("User", userSchema, "users") // "users" is the collection name. mongoose automatically assigns a plural name to collection. very stupid
const productmodel = mongoose.model("Product", productSchema, "product")
module.exports = {
    User: usermodel,
    Product: productmodel
}
