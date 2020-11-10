const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password,
		type: req.body.type
	};

	userModel.validate(user, function(status, type){
		if(status){
			res.cookie('uname', req.body.username);
			res.cookie('type', req.body.type);
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}
	});
}); 

module.exports = router;