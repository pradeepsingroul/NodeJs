require("dotenv").config();
const mysql =  require("mysql2");


const connection = mysql.createPool({
        host: process.env.LOCALHOST || "localhost",
        user: process.env.ROOT || "root",
        database: process.env.DATABASE || "mentationgroup",
        password: process.env.PASSWORD || "pradeep4899",
    })


module.exports = connection
