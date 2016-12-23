const express = require('express')
const route = express.Router()

route.get('/', function(req, res){
	res.sendFile( __dirname + '../views/error-page.ejs')
}) 

module.exports = route