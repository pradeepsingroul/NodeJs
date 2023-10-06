const {getConnection} = require("../dbConnection.js")

const dataDikhao = async (id)=>{
    try {
        let con = await getConnection();
        let data = await con.find(id).toArray();
        if(data.length>0){
            // console.log(data)
            return data;
        }else{
            console.log("data doesn't exist....")
        }
        
    } catch (error) {
        console.log(error.message)
    }
    
}
// dataDikhao({name:"Anhoti"}); //it return the data which match with the name
// dataDikhao();// it return all the data present inside the items table

module.exports = {dataDikhao}