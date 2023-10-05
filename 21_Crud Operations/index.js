const {getConnection} = require("./dbConnection")


// 1-wayc 
//======= read =======
async function getData(){
    let data = await getConnection();
    data = await data.find().toArray()
    console.log(data)
}
// 2-way 
// getConnection().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

//====== create ======
async function setData(){
    let data = await getConnection()
    data.insertOne({data:"data"})
}

//===== update data =====
async function UpdateData(){
    let data = await getConnection()
    data = data.updateOne({name: 'basi'},{$set : { kam: 'tughe kya lena dena',age: 24, address: 'chal bada aaya',  email: 'kyubtau@gmail.com'}},{upsert: true})
    console.log('data',await data);
}

//===== delete =====
 async function deleteData(){
        let data = await getConnection()
        data = data.deleteMany()
        console.log('data',await data);
    }


setData()
UpdateData()
deleteData()
getData();