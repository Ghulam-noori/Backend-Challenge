const mongoose = require('mongoose');
const schema = mongoose.Schema;


const FEED = new schema({
    name:{
        type : String,
        required : true,
        maxlength : 15
    },
    message:{
        type : String,
        required : true,
        maxlength : 40
    },
    create_at:{
        type:Date,
        default:Date.now,
        get: function(createAt){
            
        return moment(createAt).format('MMMM Do YYYY, h:mm:ss a');
        
        }
    }
    
},{timestamps:true})





let model = mongoose.model('Feed',FEED)
module.exports = model;