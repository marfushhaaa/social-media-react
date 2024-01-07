const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

//to use app, our realtime server
app.listen(7770, ()=>{
  console.log("backend is readywrtwrgt")
})
