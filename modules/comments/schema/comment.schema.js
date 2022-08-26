const { default: mongoose } = require("mongoose");
const {Schema} = require("mongoose");

const CommentSchema = new Schema({

      content: {
        type: String,
        required: true,
      },
      createdBy:{
        type: mongoose.Schema.Types.String, ref:"user"
      },
      postID:{
        type: mongoose.Schema.Types.ObjectId, ref:"post"
      }
    },
    {
      collection: 'comments',
      timestamps: true,
    }
)
module.exports = CommentSchema;
