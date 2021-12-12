// this is not how one should store sensitive credentials, i know
// everything here is throwaway. use it 
fs = require("fs")

const server_config = {
    socket:
    {
        ipaddr: "0.0.0.0",
        port: 8080
    },
    database:
    {
        username: "throwawayuser",
        password: "throwawaypassword",
        db: "throwawaydb"
    },
    session:
    {
        secret: "verybigsecret"
    }
} 

module.exports = server_config
