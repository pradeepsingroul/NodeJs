const {getConnection} = require("../dbConnection.js")

const iseDeleteKaro = async (pehchan)=>{
    try {
        let con = await getConnection();
        let data = await con.deleteOne(pehchan);
        if(data.acknowledged && data.deletedCount>0){
            return "Data deleted succesfully"
        }else{
            let id = pehchan.name;
            return "data doesn't exist with the identity :"+id
        }
        
    } catch (error) {
        console.log(error.message)
    }
    
}

// iseDeleteKaro()
module.exports = {iseDeleteKaro}