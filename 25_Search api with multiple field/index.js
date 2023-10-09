const express = require("express")
const { getConnection } = require("./dbConnection")

const app = express();
app.use(express.json())

app.get("/get/:key", async (req, res) => {
    let con = await getConnection()
    let data = await con.find(
        {
            "$or": [
                {name: { $regex: req.params.key } },
                {category: { $regex: req.params.key} }
               
            ]
        }
    );
    // console.log(data)
    res.send(data)
})

app.listen(5000)