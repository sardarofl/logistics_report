const config = require('../config/database');
const mysql = require('mysql');
const mongoose = require('mongoose');
const logistic_schema = require('./logistic_schemas');
const Fetch = require('../models/fetch');
var xlsx = require('node-xlsx').default;

const Fetch_Items={

  readXLSfile : function(){
    
// Parse a file
    const workSheetsFromFile = xlsx.parse('./report/logisticreport.xlsx');
    // console.log(workSheetsFromFile);
    return(workSheetsFromFile);
  },

  fetch_logistic : function(callback){
    logistic_schema.find(callback);
  },

  fetch_shipment_byID : function(id,callback){
    logistic_schema.findOne(id, callback);
  }
};


module.exports=Fetch_Items;
