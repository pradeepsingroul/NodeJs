const express = require("express");
const { arr } = require("./data");
var app = express();
var data = require("./data")

// sending html to the response and get it in the browser
// http://localhost:8080/?name=Pradeep&age=24&address=Satna
app.get("/", (req, res) => {
    var name = req.query.name; //Pradeep
    var age = req.query.age; // 24
    var address = req.query.address; // Satna

    res.send(`<div>
        <h1>${name}</h1>
        <h2>${age}</h2> 
        <h3>${address}</h3>
    </div>`)
})

//sending json data to browser
// http://localhost:8080/jsonData
app.get("/JsonData",(req,res)=>{
    res.send(JSON.stringify(data.arr))
})



//link two html home page to about page by using anchor tag
app.get("/home",(req,res)=>{
    res.send(`<a href=/about >Go to about page</a>`)
})
app.get("/about",(req,res)=>{
    res.send(`<p>
    WHO WE ARE </br>
    We in Mentation are team of technology and solutions focused professionals. We understand and work to make India and world a digital space. Our endeavours are to provide technology and deliver safe and secure world
    We are technical Glocal company. We are bringing people and technology of the different parts of the world together to make and achieve solutions
    We are continuously working on improving our service and introducing leading edge technology and products to provide the best solution.
    Industrial Maintenance – We understand the importance of maintenance and Longer asset life. We are channel partner of NCH India. NCH products help in better maintenance and less equipment downtime. NCH provides products which Improves the efficiency (assets in good repair tend to operate better)
    Industrial Safety – Industrial facilities have unique safety challenges because hazards and incidents affect more than just the people on the factory floor. We understand practicing good industrial safety equipment is the best way to ensure a smooth-running operation that has the best interests of workers, vendors, and customers at heart. Industrial safety works hard to prevent workplace hazards, including chemical exposures, poor ergonomics, and physical hazards so that business can continue as normal with no interruption to production.
    Public Safety – We are channel partners of the world’s leading public safety solution provide. We understand the increasing challenges in the public security area, responsible public institutions and organisations can tap into their own intelligence to successfully address possible threats in advance. They optimise their internal structures, use synergies, and carefully balance costs and benefits of their measures
    Business Consultancy – We at Mentation, provide business consultancy, aimed at guiding new and breeding entrepreneurs to establish a new business with complete guidance and support. We tend to take this support a notch higher with use of effective marketing and advertising solutions, once the business is ready to move or is stuck to a deadlock. Small and medium Investors can also expect business solutions with fixed returns.
     </p>`)
})

app.listen(8080)