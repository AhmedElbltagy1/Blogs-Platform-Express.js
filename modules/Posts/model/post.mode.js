const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
    },
    {
      collection: 'posts',
      timestamps: true,
    }
  );

const PostModel = mongoose.model("post",PostSchema);

module.exports = PostModel;
