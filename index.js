const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());


//here we read the directory/where we are fetching data and synchronize it
const {readdirSync} = require("fs")  

//we map through the data in the directory(routes)
readdirSync("./routes").map((file)=>app.use('/',require('./routes/' + file)))

 //here we send the data to our index.html file where we want to display it
 app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
 })


//connecting the dot env file to this file 
require ('dotenv').config();
const port = process.env.PORT || 10000

//listening from the port assigned
app.listen(port,()=>{
    console.log(`Your json server is running on port ${port}`);
    
})
