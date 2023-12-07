const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createBlogController,
  getAllBlogsController,
  updateBlogController,
  deleteBlogController,
  searchBlogsController,
} = require("../controllers/blogCtrl");

const router = express.Router();

// Create a new blog post
router.post("/createBlog", authMiddleware, createBlogController);

// Read all blog posts
router.get("/getAllBlogs", authMiddleware, getAllBlogsController);

// Update a blog post
router.put("/updateBlog/:blogId", authMiddleware, updateBlogController);

// Delete a blog post
router.delete("/deleteBlog/:blogId", authMiddleware, deleteBlogController);

// Search for blogs based on a keyword
router.get("/searchBlogs", authMiddleware, searchBlogsController);

module.exports = router;
