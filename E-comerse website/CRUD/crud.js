const connection = require("../DbConnectio/connection")

const getAll =  ()=>{
    const qry = "SELECT * FROM products";
    connection.query(qry,(error,result,field)=>{
        if(!error){
            return result;
        }else{
            return error
        }
    })
}


const register =  (data)=>{
    const qry = "INSERT INTO products ?SET";
    connection.query(qry,data,(error,result,field)=>{
        if(!error){
            return result;
        }else{
            return error
        }
    })
}