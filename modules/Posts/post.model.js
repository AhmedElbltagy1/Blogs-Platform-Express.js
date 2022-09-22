const mongoose = require('mongoose')

const {Schema} = require('mongoose');

const PostSchema = new Schema({
      title: {
        type:{ type:String , required:true}},
       
      description : {
        type:{ type:String , required:false}},
        
      image:  String,
    },
  );

const PostModel = mongoose.model("Post",PostSchema);

module.exports = PostModel;
