const config = require('../config/database');
//const mysql = require('mysql');
var path = require('path');
const mongoose = require('mongoose');
const logistic_schemas = require('./logistic_schemas')
const fs = require('fs');
//delete items

const Delete_Items={
    DeleteFromShipments:function(item, res, callback){
        
        logistic_schemas.remove({_id:item},callback);
   
      }
};


module.exports=Delete_Items;
