const mongoose = require("mongoose")



const getConnection = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com")
    let item = {
        name: String,
        brand: String,
        category: String,
        price: Number
    }
    const ItemsSchema = new mongoose.Schema(item)
    const itemModel = mongoose.model("items",ItemsSchema)
    return itemModel;
}


//set inside the data
const setToDatabase= async (itm)=>{
    let itemModel = await getConnection()
    // console.log('itemModel', itemModel)
    let data = new itemModel(itm)
    let result = await data.save()
    console.log(result)
 
}

//get from the data
const getToDatabase= async ()=>{
    let itemModel = await getConnection()
    let data =  await itemModel.find()
    console.log(data)
}

//delete from the data
const deleteToDatabase= async (name)=>{
    let itemModel = await getConnection()
    let data =  await itemModel.deleteMany(name)
    console.log(data)
}

const updateToDatabase= async ()=>{
    let itemModel = await getConnection()
    let data = await itemModel.updateOne({name:"Oppo 137"},{$set:{category:"Purana smart phone"}})
    console.log(data)
 
}


// setToDatabase( {"name": "I-7",
// "brand": "apple",
// "category": "smart phone",
// "price": 30000})

// deleteToDatabase({"name":"I phone-7"})
getToDatabase()
// updateToDatabase();