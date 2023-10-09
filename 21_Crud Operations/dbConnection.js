const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)

const getConnection = async ()=>{
    let res = await client.connect();
    let db = res.db("e-com").collection("items")
    return db;
    // console.log(await data)

}


module.exports = {getConnection}
