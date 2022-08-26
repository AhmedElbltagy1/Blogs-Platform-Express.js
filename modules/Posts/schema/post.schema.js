const { default: mongoose } = require("mongoose");
const {Schema} = require("mongoose");


const PostSchema = new Schema({

      title: {
        type: String,
        required: true,
      },
      description:{

        type: String,
        required: false,
      },
      picture: {
          type:String,
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
module.exports = PostSchema ;
