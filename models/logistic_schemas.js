const mongoose = require('mongoose');

//Room schema
const LogisticSchema = mongoose.Schema({

  supplier:{
    type:String
  },
  invoiceno:{
    type:String
  },
  invamount:{
    type:String
  },
  currency:{
    type:String
  },
  swift:{
    type:String
  },
  supplierreadiness:{
    type:String
  },
  legalization:{
    type:String
  },
  pickup:{
    type:String
  },
  shippingtype:{
    type:String
  },
  shippingdep:{
    type:String
  },
  shippingeta:{
    type:String
  },
  bank:{
    type:String
  },
  clearance:{
    type:String
  },
  ntra:{
    type:String
  },
  nationalsecurity:{
    type:String
  },
  gatein:{
    type:String
  }



});


module.exports = mongoose.model('logistics', LogisticSchema);
