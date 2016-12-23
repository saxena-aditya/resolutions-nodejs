const express = require('express')
const app = express()
const front_page = require('./front-page')
const thank_you = require('./thank-you')
const error_page = require('./error')
const pre_sug = require('./pre-suggestions')
const bodyParser = require('body-parser')
const mongodbClient = require('mongodb').MongoClient
const dbUser = 'AdiUser'
const dbPass = 'Aditya602'
const dbString = 'mongodb://' + dbUser + ':'+ dbPass +'@ds143608.mlab.com:43608/new_year_resolution'
var db
var port = process.env.PORT || 5000


mongodbClient.connect(dbString, function(err, database){

	if(err){
		console.log(err)
		res.redirect('/error')
		return
	}
	else{
	    db = database
	    app.listen(port, function(){
	    console.log('server UP and RUNNING @port ' + port)
	})
   }	
 })
		
app.set('view engine', 'ejs')
app.use(express.static( __dirname +'/public'))
console.log(__dirname + '/public')
app.use(bodyParser.urlencoded({extended: true}))


app.post('/submitting', function(req, res){
		
		db.collection('chunk').save(req.body, function(err, result){
			if(err){
				console.log(err)
				res.redirect('/error')
				
			}
			else{
				res.redirect('/thankyou')
			}
		})	
	})

app.use('/', front_page)
app.use('/previous_suggestions', pre_sug)
app.use('/thankyou', thank_you)
app.use('/error', error_page)



