const express = require('express')
const mysql  = require("mysql2")
const bodyparser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config()


const app = express();
const api = process.env.API_URL
app.use(bodyparser.json())
app.use(morgan("tiny"))


// creating a connection with mysql datbase
const con =  mysql.createConnection({
    host: process.env.LOCALHOST,
    user: process.env.ROOT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})


app.get(`${api}/products`,(req,res)=>{
    try {
        const query1 = "select * from users";
        con.promise().execute(query1,(error,result)=>{
            res.send(result)
        })
    } catch (error) {
        
    }
 
})

app.post(`${api}/products`, async (req, res) => {
    // const product1 = {
    //    id: 1,
    //    name: 'hair dresser',
    //    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F53%2F136653-050-E8AE6706%2FHairdresser-curling-iron.jpg&tbnid=TXuIJpjb-E-kyM&vet=12ahUKEwj02KGWwvqBAxUlfGwGHYvkCukQMygAegQIARBG..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fart%2Fhairdressing&docid=LNs5fW8O_xOEuM&w=1600&h=1067&q=hair%20dresser&ved=2ahUKEwj02KGWwvqBAxUlfGwGHYvkCukQMygAegQIARBG"
    // }


// 1 way to do an operation
    // try {
    //     const {pId,P_name,price} = req.body
    //     // console.log('data', data);
    //     const query1 = `INSERT INTO products (pId,P_name,price) values (?,?,?)`
    //     const values = [pId,P_name,price]
    //     await con.promise().execute(query1,values)
    //     res.send("Data inserted successfully....")
    // } catch (error) {
    //     res.send(error)
    // }



// this is 2 way to do the same operation
    const prod = req.body;
     con.query(`INSERT into products SET?`,prod,(error, result,field)=>{
        if(result.affectedRows>0){
            res.send(`${JSON.stringify(prod)} Data inserted successfully...`)
        }else{
            res.send("Data cant not be inserted......")
        }
    
    })
    // console.log(await res1)
   
})

app.listen(3000, () => {
    // console.log(api)
    console.log("server is running http://localhost/3000")
})