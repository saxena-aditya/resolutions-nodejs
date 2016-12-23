const express = require('express')
const route = express.Router()
const mongodbClient = require('mongodb').MongoClient
const dbUser = 'AdiUser'
const dbPass = 'Aditya602'
const dbString = 'mongodb://' + dbUser + ':'+ dbPass +'@ds143608.mlab.com:43608/new_year_resolution'
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