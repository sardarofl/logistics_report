const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Set = require('../models/set');

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



//set meeting data
router.post('/set_logisticdata',function(req,res){
	var req = req;
	var res = res;

	  Set.setLogisticsData(req,res, (err, category) =>{
	    if(err){
	     res.json({success:false, msg:'Failed to set logistic data'});
	    }else{
	     res.json({success:true, msg:'Data Set'});
	    }
	  });
});



module.exports = router;
