const express = require('express')
const router = express.Router()
const products = require('../Modules/Products')



router.get("/api/c1/",products)