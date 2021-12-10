var mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
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
        match: [/.+\@.+\..+/, 'invalid email']
    },
    user_type: Number,
    business_name: String
})

const productSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    business_name: String,
    product_name: String,
    product_cost: Number
})

const productmadeSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    business_name: String,
    product_name: String,
    product_amount: Number,
    date: Date
})

const productsoldSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    business_name: String,
    product_name: String,
    product_amount: Number,
    date: Date
})

const usermodel = mongoose.model("User", userSchema, "users") // "users" is the collection name. mongoose automatically assigns a plural name to collection. very stupid
const productmodel = mongoose.model("Product", productSchema, "product")
const productmademodel = mongoose.model("ProductMade", productmadeSchema, "productmade")
const productsoldmodel = mongoose.model("ProductSold", productsoldSchema, "productsold")
module.exports = {
    User: usermodel,
    Product: productmodel,
    ProductMade: productmademodel,
    ProductSold: productsoldmodel
}
