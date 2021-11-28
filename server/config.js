fs = require("fs")

const server_config = {
    socket:
    {
        ipaddr: "localhost",
        port: 8080
    },
    ssl:
    {
        key: fs.readFileSync(__dirname + "/selfsigned-key.key"),
        cert: fs.readFileSync(__dirname + "/selfsigned-cert.crt")
    },
    database:
    {
        username: "newuser",
        password: "newuser"
    }
} 

module.exports = server_config
