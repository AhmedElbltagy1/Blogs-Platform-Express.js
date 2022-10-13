const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

      title: 
      { 
        type:String ,
        required: true
        },
      description:
      {
        type:String,
        required:true
      },
      image:{ 
        type:String,
        required:false
      },
      creator:
      {
        type: mongoose.Schema.Types.ObjectId, ref: "user"
      }
    },
  );

const PostModel = mongoose.model("Post",PostSchema);
module.exports = PostModel;
