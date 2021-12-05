const mongoose = require("mongoose")
const alert = require("alert")
let { User } = require("./database/dbconnector")
let { Product } = require("./database/dbconnector")

async function apiProduct(req, res) {
    const products = await Product.find({ business_name: req.session.businessname })
    /* const productdata = {
        business_name: products.business_name,
        product_name: products.product_name,
        procduct_cost: products.procduct_cost
    } */
    res.setHeader('Content-Type', 'application/json')
    res.json(products)
}

async function addProduct(req, res) {
    Product.exists({product_name: req.body.product_name}, (err, doc) => {
        if (doc) {
            alert("product already exists")
            res.json({msg: "product already exists"})
            return
        }
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            business_name: req.body.business_name,
            product_name: req.body.product_name,
            product_cost: req.body.product_cost
        })
        product.save().then(result => {

        })
        res.json({msg: "product added"})
    })
}


module.exports = {
    apiProduct,
    addProduct
}