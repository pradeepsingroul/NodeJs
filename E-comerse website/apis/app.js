const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.json())



app.get()