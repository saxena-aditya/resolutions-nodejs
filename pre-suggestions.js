const express = require('express')
const route = express.Router()
const mongodbClient = require('mongodb').MongoClien

// use your own databases password and username in place of 'dbUser' and 'dbPass'
const dbString = 'mongodb:// dbUser:dbPass@ds143608.mlab.com:43608/new_year_resolution'
var db

var select_previous_feed = function(req, res){
	mongodbClient.connect(dbString, function(err, database){
		
		if(err)
			route.redirect('/error')
		else{
			db = database
			db.collection('chunk').find().toArray(function(err, result){
		res.render( __dirname+'/views/pre-suggestions.ejs', {suggestions : result})
	})
   }
 })
}

route.get('/', select_previous_feed)

module.exports = route
