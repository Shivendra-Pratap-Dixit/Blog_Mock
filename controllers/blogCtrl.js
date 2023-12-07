const blogModel = require("../models/blogModel");

// Create a new blog post
const createBlogController = async (req, res) => {
  try {
    const newBlog = await blogModel.create(req.body);
    res.status(201).send({
      success: true,
      message: "Blog Post Created",
      data: newBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Creating Blog Post",
      error,
    });
  }
};

// Read all blog posts
const getAllBlogsController = async (req, res) => {
  try {
    const allBlogs = await blogModel.find();
    res.status(200).send({
      success: true,
      message: "All Blog Posts Fetched",
      data: allBlogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Fetching All Blog Posts",
      error,
    });
  }
};

// Update a blog post
const updateBlogController = async (req, res) => {
  try {
    const updatedBlog = await blogModel.findOneAndUpdate(
      { _id: req.params.blogId },
      req.body,
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Blog Post Updated",
      data: updatedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Blog Post Update Issue",
      error,
    });
  }
};

// Delete a blog post
const deleteBlogController = async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.params.blogId);
    res.status(200).send({
      success: true,
      message: "Blog Post Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Deleting Blog Post",
      error,
    });
  }
};

// Search for blogs based on a keyword
const searchBlogsController = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const searchResults = await blogModel.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { content: { $regex: keyword, $options: "i" } },
      ],
    });
    res.status(200).send({
      success: true,
      message: "Search Results",
      data: searchResults,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Searching Blogs",
      error,
    });
  }
};

module.exports = {
  createBlogController,
  getAllBlogsController,
  updateBlogController,
  deleteBlogController,
  searchBlogsController,
};
