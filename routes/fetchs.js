const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Fetch = require('../models/fetch');
const Set = require('../models/set');
const User = require('../models/user');



function verifyToken(req,res,next){
	
	const bearerHeader = req.headers['authorization'];

	if(typeof bearerHeader !== 'undefined'){
		const bearer = bearerHeader.split(' ');
		//get token from array
		const bearerToken = bearer[1];
		req.token = bearerToken;
		//next middle ware
		next();
	}else{
		res.sendStatus(403);
	}
}

//get Auth URL
router.get('/auth_url',verifyToken,function(req,res){
	console.log("fetch raeched auth")
	res.json(Auth.getAuthUrl());
});



//fetch
router.get('/read_xls_file',function(req,res){
	console.log('reading')

	 res.json(Fetch.readXLSfile());
    
});



module.exports = router;
