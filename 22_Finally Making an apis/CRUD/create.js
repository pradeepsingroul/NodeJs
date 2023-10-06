const {getConnection} = require("../dbConnection.js")

const iseInsertKaro = async (entity)=>{
    try {
        // console.log("Here")
        let con = await getConnection();
        let data = await con.insertOne(entity);
        if(data.acknowledged && data.insertedId!= null){
            return "Data inserted succesfully"
        }else{
           return "data can't inserted"
        }
        
    } catch (error) {
        console.log(error.message)
    }
    
}

// iseInsertKaro({
//     "name": "Somvati singh",
//     "address": "kyu batau5",
//     "age": 24,
//     "email": "somvati@gmail.com",
//     "kam": "tughe kya lena dena"
// });

module.exports= {iseInsertKaro};