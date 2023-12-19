require("dotenv").config();
var express = require('express');
var app = express();

app.listen(process.env.PORT, ()=>{
    console.log (`listening on ${process.env.PORT}`);
})

