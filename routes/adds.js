const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Add = require('../models/add');
const passport = require('passport');
const jwt = require('jsonwebtoken');


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


router.post('/xlsx_file_upload',function(req,res){
	var req = req;
	var res = res;
	console.log("file uploading")
	  Add.UploadCSV(req,res, (err, category) =>{
	    if(err){
	     res.json({success:false, msg:'Failed to upload'});
	    }else{
	     res.json({success:true, msg:'uploaded'});
	    }
	  });
});



module.exports = router;
