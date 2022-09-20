const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const PostSchema = new Schema(
  {
      title: {
        type: String,
        required: true,
    },

    description:{
      type: String,
      required: false,
    },
    photo: {
        type: String ,
        required: false
    },
    creator:{
      type: mongoose.Schema.Types.ObjectId, ref:"user"
    }
  },
  {
    collection: 'posts',
    timestamps: true,
  }
)
const PostModel = mongoose.model("post",PostSchema)

module.exports = PostModel