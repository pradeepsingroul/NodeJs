const mongoose = require("mongoose")

const main= async (itm)=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com")
    let item = {
        name: String,
        brand: String,
        category: String,
        price: Number
    }
    const ItemsSchema = new mongoose.Schema(item)
    const itemModel = mongoose.model("items",ItemsSchema)
    let data = new itemModel(itm)
    let result = await data.save()
    console.log(result)
 
}

main({ "name": "I phone-7",
"brand": "apple",
"category": "smart phone",
"price": 30000,
"kuchh:": "alag"})