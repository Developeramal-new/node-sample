const mongoose = require('mongoose') // importing mongoose module

//Creating a userschema using mongose.schema function
const userschema = mongoose.Schema({
    //type - datatype ; required - not null ; dropDups - allows only unique data
    username : {type : String , required: true, unique: true, dropDups: true},
    password : {type : String, required : true}
})
// mongoose.model fuction registers the schema
module.exports = mongoose.model('Users', userschema) // exporting the model