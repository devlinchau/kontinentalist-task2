const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for a Post document according to the assignment brief
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
