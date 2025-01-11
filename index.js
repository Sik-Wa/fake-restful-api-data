const express = require('express');
const app = express();





//connecting the dot env file to this file 
require ('dotenv').config();
const port = process.env.PORT || 10000

//listening from the port assigned
app.listen(port,()=>{
    console.log(`Your json server is running on port ${port}`);
    
})
