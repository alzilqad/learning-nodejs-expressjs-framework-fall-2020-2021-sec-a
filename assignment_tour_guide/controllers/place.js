const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('place/index', {name: req.cookies['uname'], type: req.cookies['type']});
});

module.exports = router;