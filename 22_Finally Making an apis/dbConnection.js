const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);

const getConnection = async ()=>{
    let dbCon = await client.connect()
    let col = dbCon.db("e-com").collection("items")
    return col;
}

module.exports = {getConnection}