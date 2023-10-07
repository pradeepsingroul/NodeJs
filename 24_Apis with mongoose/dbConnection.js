const mongoose = require("mongoose")


const getConnection = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com")
    let schema = {
        name: String,
        brand: String,
        category: String,
        price: Number
    }
    const itemSchema = new mongoose.Schema(schema)
    const itemModel = mongoose.model("items",itemSchema)
    return itemModel;

}

module.exports = {getConnection}

