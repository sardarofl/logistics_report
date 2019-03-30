const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Delete = require('../models/delete');


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

//delete category
router.delete('/delete_shipment/:id',function(req,res){
	var id = req.params.id;
	var res = res;
	Delete.DeleteFromShipments(id,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});
module.exports = router;
