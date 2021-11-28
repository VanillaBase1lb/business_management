
const path = require("path")
const https = require("https")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
let signupUser = require("./signup")

// loads the configuration
const server_config = require(__dirname + "/config")
const ssl_params = {
    key: server_config.ssl.key,
    cert: server_config.ssl.cert
}

// sets from where to get static files and which endpoint to access it
app.use("/static", express.static(__dirname + "/../client/static"))
app.use(express.json());

// connect mongoose
// username and password are in config.js because
mongoose.connect(`mongodb+srv://${server_config.database.username}:${server_config.database.password}@testdbms.hgojw.mongodb.net/testdbms?retryWrites=true&w=majority`).catch(err => console.log(err))

// routing
app.get("/test", (req, res) => {
    res.send("Server working")
})

app.get(["/", "/home"], (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/html/home.html"))
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

app.get("/404page", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/html/404page.html"))
})

// create https server
server = https.createServer(ssl_params, app).listen(server_config.socket.port, server_config.socket.ipaddr, () => {
    console.log(`Server running at: https://${server_config.socket.ipaddr}:${server_config.socket.port}`)
})

