
const path = require("path")
const https = require("https")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const sessions = require("express-session")
let signupUser = require("./signup")
let loginUser = require("./login")
let apiUser = require("./userapi")
let { apiProduct } = require("./productapi")
let { addProduct } = require("./productapi")
let { madeProduct } = require("./productapi")
let { soldProduct } = require("./productapi")

// loads the configuration
const server_config = require(__dirname + "/config")
const ssl_params = {
    key: server_config.ssl.key,
    cert: server_config.ssl.cert
}

// sets from where to get static files and which endpoint to access it
app.use("/static", express.static(__dirname + "/../client/static"))
app.use(express.json())
app.use(sessions({
    secret: server_config.session.secret,
    saveUninitialized:true,
    cookie: { maxAge: 99999999999999 },
    resave: true
}));;
app.use(cookieParser())

// connect mongoose
// username and password are in config.js because
mongoose.connect(`mongodb+srv://${server_config.database.username}:${server_config.database.password}@testdbms.hgojw.mongodb.net/testdbms?retryWrites=true&w=majority`).catch(err => console.log(err))

// routing
app.get("/test", (req, res) => {
    res.send("Server working")
})

app.get(["/", "/home"], (req, res) => {
    // const today = new Date()
    // console.log(today.getDate())
    if (req.session.userid) {
        // console.log(req.session)
        switch (req.session.usertype) {
            case 0:
                res.redirect("/owner/dashboard")
                return
            case 1:
                res.redirect("/shop/dashboard")
                return
            case 2:
                res.redirect("/factory/dashboard")
                return
            default:
                return
        }
    }
    else {
        res.sendFile(path.join(__dirname, "/../client/html/home.html"))
    }
})

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/html/signup.html"))
})
app.post("/signup", (req, res) => {
    signupUser(req, res)
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/html/login.html"))
})
app.post("/login", (req, res) => {
    loginUser(req, res)
})

app.get("/owner/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/html/owner/dashboard.html"))
})

app.get("/shop/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/html/shop/dashboard.html"))
})

app.get("/factory/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/html/factory/dashboard.html"))
})

app.get("/api/user", (req, res) => {
    if (!req.session.userid) {
        res.send("user not logged in")
        return
    }
    else {
        apiUser(req, res)
    }
})

app.get("/api/products", (req, res) => {
    if (!req.session.userid) {
        res.send("user not logged in")
        return
    }
    else {
        apiProduct(req, res)
    }
})

app.post("/api/addproduct", (req, res) => {
    // console.log(req.session.usertype)
    if (req.session.usertype == 2) {
        addProduct(req, res)
    }
    else {
        res.send("no authorization")
        return
    }
})

app.post("/api/productmade", (req, res) => {
    // console.log(req.session.usertype)
    if (req.session.usertype == 2) {
        madeProduct(req, res)
    }
    else {
        res.send("no authorization")
        return
    }
})

app.post("/api/productsold", (req, res) => {
    // console.log(req.session.usertype)
    if (req.session.usertype == 1) {
        soldProduct(req, res)
    }
    else {
        res.send("no authorization")
        return
    }
})

app.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/")
})

app.get("/404page", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/html/404page.html"))
})

// create https server
server = https.createServer(ssl_params, app).listen(server_config.socket.port, server_config.socket.ipaddr, () => {
    console.log(`Server running at: https://${server_config.socket.ipaddr}:${server_config.socket.port}`)
})

