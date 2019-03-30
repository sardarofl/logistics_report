const config = require('../config/database');
var multer  =   require('multer');
var moment  =   require('moment');
var path = require('path');
const mongoose = require('mongoose');
const logistc_schema  = require('./logistic_schemas')
//multer
var filename_path;

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './report');
  },

  filename: function (req, file, callback) {
    ////console.log(req);
    filename_path="logisticreport.xlsx";
    callback(null, "logisticreport.xlsx");
  }
});

var upload = multer({ storage : storage}).single('file');
var multiple_upload = multer({ storage : storage}).array('image');


//adding items

const Add_Items={
  UploadCSV:function(req,res, callback){
    upload(req,res,function(err) {
      console.log(req);
      callback();
    });
  },
  AddToShipments:function(req,res, callback){
    upload(req,res,function(err) {
        console.log(req);
        //console.log("Adding Room");
    let new_shipment = new logistc_schema({
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
    });

      new_shipment.save( callback, function (err, docs) {
        if (err){
            return console.error(err);
        } else {
          //console.log("Room inserted to Collection");
        }
      });
    });
  }
};


module.exports=Add_Items;
