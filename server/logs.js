const mongoose = require("mongoose")
let { Product } = require("./database/dbconnector")
let { ProductMade } = require("./database/dbconnector")
let { ProductSold } = require("./database/dbconnector")

async function logs(req, res) {
    const date1 = new Date(req.body.date1)
    date1.setHours(24, 0, 0, 0)
    const date2 = new Date(req.body.date2)
    date2.setHours(24, 0, 0, 0)
    const recordsmade = await ProductMade.find({date: {$gte: date1, $lte: date2}, business_name: req.session.businessname})
    var records = []
    var productsall = []
    const products = await Product.find({business_name: req.session.businessname})
    for (let i = 0; i < products.length; i++) {
        let obj = {
            product_name: products[i].product_name,
            revenuegenerated: 0,
            soldcount: 0
        }
        productsall.push(obj)
    }
    for(let i = 0; i < recordsmade.length; i++) {
        let obj = {
            product_name: recordsmade[i].product_name,
            product_amount_made: recordsmade[i].product_amount,
            date: JSON.stringify(recordsmade[i].date), // UNPLEASANT
            product_amount_sold: 0,
            consistent: true
        }
        records.push(obj)
    }
    const recordssold = await ProductSold.find({date: {$gte: date1, $lte: date2}, business_name: req.session.businessname})
    for(let i = 0; i < recordsmade.length; i++) {
        for(let j = 0; j < recordssold.length; j++) {
            if (records[i].product_name == recordssold[j].product_name
            && records[i].date == JSON.stringify(recordssold[j].date)) {
                records[i].product_amount_sold = recordssold[j].product_amount
                const index = productsall.findIndex((element) => records[i].product_name == element.product_name)
                productsall[index].soldcount += records[i].product_amount_sold
                if (records[i].product_amount_sold >= records[i].product_amount_made) {
                    records[i].consistent = false
                }
                else {
                    records[i].consistent = true
                }
            }
        }
    }
    var totalrevenue = 0
    for(i = 0; i < records.length; i++) {
        const costrecords = await Product.findOne({product_name: records[i].product_name, business_name: req.session.businessname})
        records[i].product_revenue = costrecords.product_cost * records[i].product_amount_sold
        totalrevenue += records[i].product_revenue
        const index = productsall.findIndex((element) => records[i].product_name == element.product_name)
        productsall[index].revenuegenerated += records[i].product_revenue
    }
    var bestseller = "bestseller"
    const soldmax = Math.max.apply(null, productsall.map(function (x)  {return x.soldcount}))
    const i1 = productsall.findIndex((element) => soldmax == element.soldcount)
    bestseller = productsall[i1].product_name

    var highestrevenueseller = "highestrevenueseller"
    const revenuemax = Math.max.apply(null, productsall.map(function (x)  {return x.revenuegenerated}))
    const i2 = productsall.findIndex((element) => revenuemax == element.revenuegenerated)
    if (i2 == -1) {
        res.send("i forgot to fix this bug")
        return
    }
    highestrevenueseller = productsall[i2].product_name

    // console.log(bestseller)
    // console.log(highestrevenueseller)
    let responseobj = {
        records: records,
        totalrevenue: totalrevenue,
        bestseller: bestseller,
        highestrevenueseller: highestrevenueseller
    }
    // console.log(records)
    res.json(responseobj)
}


module.exports = {
    logs
}
