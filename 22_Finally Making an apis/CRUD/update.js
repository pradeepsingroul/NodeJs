const {getConnection} = require("../dbConnection.js")

const iseUpdataKaro = async (identity,toSet)=>{
    try {
        let con = await getConnection();
        let data = await con.updateMany(identity,{ $set :toSet});
        if(data.acknowledged && data.modifiedCount>0){
            return "Data updated succesfully"
        }else{
            let name = identity.name
            return "data can't update because data does not exist with the indentity: "+name;
        }
        
    } catch (error) {
        console.log(error.message)
    }
    
}
// iseUpdataKaro({name:"Anhoti"})
module.exports = {iseUpdataKaro}