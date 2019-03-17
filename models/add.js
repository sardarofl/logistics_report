const config = require('../config/database');
var multer  =   require('multer');
var moment  =   require('moment');
var path = require('path');
const mongoose = require('mongoose');

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
  }
};


module.exports=Add_Items;
