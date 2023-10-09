const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/e-com"

const getConnection = async ()=>{
    mongoose.connect(url)
    let schema = {
        name: String,
        brand: String,
        category: String,
        price: Number
    }
    let itemSchema = new mongoose.Schema(schema)
    let itModel = mongoose.model("items",itemSchema)
    return itModel;
}

module.exports = {getConnection}
// getConnection()