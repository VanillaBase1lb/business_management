const mongoose = require("mongoose")
const alert = require("alert")
let { User } = require("./database/dbconnector")
let { Product } = require("./database/dbconnector")
let { ProductMade } = require("./database/dbconnector")
let { ProductSold } = require("./database/dbconnector")

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
            // _id: new mongoose.Types.ObjectId(),
            business_name: req.body.business_name,
            product_name: req.body.product_name,
            product_cost: req.body.product_cost
        })
        product.save().then(result => {

        })
        res.json({msg: "product added"})
    })
}

function madeProduct(req, res) {
    Product.exists({product_name: req.body.product_name}, (err, doc) => {
        if (!doc) {
            alert("product does not exist")
            res.json({msg: "product does not exist"})
            return
        }
        const today1 = new Date()
        today1.setHours(24, 0, 0, 0)
        // console.log(today1)
        ProductMade.findOne({product_name: req.body.product_name,
            business_name: req.body.business_name,
            date: today1}, (err, productmadesame) => {
                if (productmadesame) {
                    // console.log(productmadesame.product_name)
                    const newamount = productmadesame.product_amount + req.body.product_amount
                    productmadesame.updateOne({product_amount: newamount}, (err, idk) => {
                        res.json({msg: "product was already present, updated its value"})
                        return
                    })
                }
                else {
                    const today = new Date()
                    today.setHours(24, 0, 0, 0)
                    const productmade = new ProductMade({
                        // _id: new mongoose.Types.ObjectId(),
                        business_name: req.body.business_name,
                        product_name: req.body.product_name,
                        product_amount: req.body.product_amount,
                        date: today
                    })
                    productmade.save().then(result => {

                    })
                    res.json({msg: "product made"})
                }
            })
    })
}

module.exports = {
    apiProduct,
    addProduct,
    madeProduct
}
