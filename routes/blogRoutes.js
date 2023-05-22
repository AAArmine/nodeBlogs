const express = require("express");
const Blog = require("../models/blog");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.post(
  "/add-blog",
  blogController.blog_add
  // (req, res) => { -> removed to controllers
  //   console.log(req.body);
  //   const blog = new Blog(req.body);
  //   blog
  //     .save()
  //     .then((result) => res.redirect("back")) //redirect the same page
  //     .catch((err) => res.send(err));
  // }
);

//get ejs files
router.get(
  "/",
  blogController.blog_index
  // (req, res) => {
  //   Blog.find()
  //     .then((result) =>
  //       res.render("index", { title: "Homepage blogs", blogs: result })
  //     )
  //     .catch((err) => res.send(err));
  // }
);
router.get(
  "/blogs/:id",
  blogController.blog_details
  // (req, res) => {
  //   const id = req.params.id;
  //   console.log({ id });
  //   Blog.findById(id)
  //     .then((result) => {
  //       res.render("details", { blog: result });
  //     })
  //     .catch((err) => res.send(err));
  // }
);
router.delete(
  "/delete-blog/:id",
  blogController.blog_delete
  // (req, res) => {
  //   const id = req.params.id;
  //   Blog.findByIdAndDelete(id)
  //     .then((result) => {
  //       console.log("hasnuma");
  //       res.json({ redirect: "/index" });
  //     })
  //     .catch((err) => res.send(err));
  // }
);
router.get(
  "/create-blog",
  blogController.blog_create_view
  // (req, res) => {
  //   const data = {
  //     title: "Welcome to My Website",
  //     message: "Hello, world!",
  //   };
  //   res.render("blog", data);
  // }
);
module.exports = router;
