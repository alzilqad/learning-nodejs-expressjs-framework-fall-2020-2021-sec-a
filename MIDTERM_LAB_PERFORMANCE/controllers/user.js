const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/create', (req, res)=>{
	res.render('user/create');
});


router.post('/create', (req, res)=>{
	
	/*var user = [req.body.uname, req.body.password, req.body.email];
	var newlist = req.session.userlist;
	newlist.push(user);
	req.session.userlist = newlist;*/
	
	res.send('New user info:'+
				"<br> Username: "+req.body.username+
				"<br> Password: "+req.body.password+
				"<br> Email: "+req.body.email
			);
});

router.get('/edit/:id', (req, res)=>{

	// console.log(req.params.id);
	userModel.getById(req.params.id, function(results){
		// console.log(results[0].user_name);
		res.render('user/edit', results[0]);
	});
});

router.post('/edit/:id', (req, res)=>{
	res.redirect('/home/userlist');
});

router.get('/delete/:id', (req, res)=>{
	userModel.getById(req.params.id, function(results){
		// console.log(results[0].user_name);
		res.render('user/delete', results[0]);
	});
});

router.post('/delete/:id', (req, res)=>{
	userModel.delete(req.params.id, function(results){
		// console.log(results[0].user_name);
		res.redirect('/home/userlist');
	});
});

module.exports = router;

