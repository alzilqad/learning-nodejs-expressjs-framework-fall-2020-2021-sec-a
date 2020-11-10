const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const jobModel = require.main.require('./models/jobModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('home/index', {name: req.cookies['uname'], type: req.cookies['type']});
});


router.get('/userlist', (req, res)=>{
	userModel.getAll(function(results){
		res.render('home/userlist', {users: results});
	});

})

router.get('/joblist', (req, res)=>{

	jobModel.getAll(function(results){
		res.render('home/joblist', {jobs: results});
	});

})

module.exports = router;