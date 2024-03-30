const Post = require('../models/postModel');

// Although not very significant in a small project like this, I decided to use async/await instead of promises as I find it easier to read and write.
// try/catch blocks are used to handle errors.
// 404 status code to the response when a post is not found.
// 201 status code to the response when a post is created.
// 200 status code to the response when a post is updated or deleted.

// GET /posts - Fetches all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send(err);
  }
}

// GET /posts/{id} - Fetches a post with the id {id}
const getPostById = async (req, res) => { 
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
}

// POST /posts - Creates a post
const createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
}

// PATCH /posts/{id} - Edits a post with the id {id}
const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
}

// DELETE /posts/{id} - Deletes a post with the id {id}
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.status(200).send({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}