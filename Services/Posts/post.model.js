const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
      title: 
      { 
        type:String,
        required: false
        },
      description:
      {
        type:String,
        required:false
      },
      imageUrl:{ 
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
