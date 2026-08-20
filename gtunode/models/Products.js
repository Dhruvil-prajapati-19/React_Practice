const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pname:String,
    price:Number,
    pdetails:String,
});

// module.exports = mongoose.model('Product', productSchema);
var ProductModel = mongoose.model('Product', productSchema); //define model
module.exports = ProductModel; // export model
