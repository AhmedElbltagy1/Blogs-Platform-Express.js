const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

      title: { type:String , required:true},
      description : {type:String , required:false},
      image:  { type:String , required:false},
    },
  );

const PostModel = mongoose.model("Post",PostSchema);

module.exports = PostModel;
