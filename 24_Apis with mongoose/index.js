const express = require("express")
const {getConnection} = require("./dbConnection")
const app = express();

app.use(express.json())//to handle to request body

app.get("/get",async (req,res)=>{
    let itModel = await getConnection();
    let data1 = await itModel.find();
    console.log('data1', data1);
    res.send(data1)
})

app.post("/post",async (req,res)=>{
    let itModel = await getConnection();
    let data = new itModel(req.body)
    data = await data.save()
    res.send(data)
})


app.delete("/delete/:name",async (req,res)=>{
    // console.log(req.params)
    let itModel = await getConnection();
    let data = await itModel.deleteOne(req.params)
    console.log('data', data);
    res.send(data)
})
app.put("/update/:name/:price",async (req,res)=>{
    let con = await getConnection()
    let data = await con.updateOne({name:req.params.name},{$set:{price:req.params.price}})
    res.send(data);
    console.log('data', data);

})

app.listen(5000)