const {Schema} = require("mongoose");


const PostSchema = new Schema({

    body: {
        type: String,
        required: true,
      },
      picture: {
          type:String,
          required: false
      }
    },
    {
      collection: 'posts',
      timestamps: true,
    }
)
module.exports = PostSchema ;
