fs = require("fs")

const server_config = {
    socket:
    {
        ipaddr: "0.0.0.0",
        port: 8080
    },
    database:
    {
        username: "newuser",
        password: "newuser",
        db: "testdbms"
    },
    session:
    {
        secret: "verybigsecret"
    }
} 

module.exports = server_config
