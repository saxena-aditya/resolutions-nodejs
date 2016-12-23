const express = require('express')
const route = express.Router()

route.post('/', function(req, res){
	console.log(req.body)
	db.collection('chunk').save(req.body, function(err, result){
	if(err){
	    console.log(err)
	    res.redirect('/error')
	}
	else{
	    console.log('data saved successfully!')
	    res.redirect('/thankyou')
	}
    })	
})

module.exports = route
