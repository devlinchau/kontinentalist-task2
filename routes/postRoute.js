const express = require('express');
const router = express.Router();
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');


// GET /posts - Fetches all posts
router.get('/', getPosts);

// GET /posts/{id} - Fetches a post with the id {id}
router.get('/:id', getPostById);

// POST /posts - Creates a post
router.post('/', createPost);

// PATCH /posts/{id} - Edits a post with the id {id}
router.patch('/:id', updatePost);

// DELETE /posts/{id} - Deletes a post with the id {id}
router.delete('/:id', deletePost);

module.exports = router;