const mongoose = require("mongoose")
const url = "mongodb://127.0.0.0:27017/e-com"

const getConnection = ()=>{
    mongoose.connect(url)
    let schema = {
        name: String,
        brand: String,
        category: String,
        price: Number
    }
    const itemSchema = mongoose.Schema(schema)
    const itModel = mongoose.model("items",itemSchema);
    return itModel;AQ
}

module.exports = {getConnection}