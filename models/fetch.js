const config = require('../config/database');
const mysql = require('mysql');
const mongoose = require('mongoose');
const Posts_schema = require('./posts_schemas');
const Fetch = require('../models/fetch');
var xlsx = require('node-xlsx').default;

const Fetch_Items={

  readXLSfile : function(){
    
// Parse a file
    const workSheetsFromFile = xlsx.parse('./report/logisticreport.xlsx');
    console.log(workSheetsFromFile);
    return(workSheetsFromFile);
  }
};


module.exports=Fetch_Items;
