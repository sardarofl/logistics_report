const config = require('../config/database');
const mysql = require('mysql');
var path = require('path');
const mongoose = require('mongoose');
var multer  =   require('multer');
const logistic_schema = require('./logistic_schemas')
//adding items

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },

  filename: function (req, file, callback) {
    ////console.log(req);
    filename_path=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    callback(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({ storage : storage}).single('image');
const Set={
  setLogisticsData:function(req,res, callback){
    upload(req,res,function(err) {
      // console.log(req);
      console.log(req.body.id)
      
        logistic_schema.findByIdAndUpdate(req.body.id,{ $set: { 
        'supplier':req.body.supplier,
        'invoiceno':req.body.invoiceno,
        'invamount':req.body.invamount,
        'currency':req.body.currency,
        'swift':req.body.swift,
        'supplierreadiness':req.body.supplierreadiness,
        'legalization':req.body.legalization,
        'pickup':req.body.pickup,
        'shippingtype':req.body.shippingtype,
        'shippingdep':req.body.shippingdep,
        'shippingeta':req.body.shippingeta,
        'bank':req.body.bank,
        'clearance':req.body.clearance,
        'ntra':req.body.ntra,
        'nationalsecurity':req.body.nationalsecurity,
        'gatein':req.body.gatein
        
      }},callback);

      

      


  });

  }


};


module.exports=Set;
