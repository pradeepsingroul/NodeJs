const {MongoClient} = require("mongodb")
const express = require("express")

const app = express()
const mongoPath = "mongodb://127.0.0.1:27017"
const client = new MongoClient(mongoPath)
// console.log('client', client);
const data = require("./data")

const insertData = async (obj)=>{
    await client.connect();
    let db = await client.db("e-com").collection("items").insertOne(obj)
    // let db = await client.db("e-com").collection("items").insertOne({name:"pradeep singroul",address:"Satna"})
    console.log('db', db);
}

let allData;
async function getData(){
    await client.connect();
    let db = client.db("e-com")
    let ItemCollection = db.collection("items")
    allData  = await ItemCollection.find({}).toArray()
   
    // console.log('data', data);
    
}
app.get("/api/getAll",(req,res)=>{
    getData()
    res.send(JSON.stringify(allData))
})


app.post("/api/set",(req,res)=>{
    try {
        let body = req.query;
        let obj = {
            name:body.name,
            address:body.address
        }
        insertData(obj)
        res.send("data successfully inserted...")
    } catch (error) {
        res.send(error.message)
    }
    
    
})
app.listen(5000)
// insertData()
getData()