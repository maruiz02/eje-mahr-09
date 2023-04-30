const express = require("express");

const app = express(); 

require('dotenv').config({path:'./.env'});

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(port, () => {
    console.log('server running in port: '+port); 
}); 