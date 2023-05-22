const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //from new to old
    .then((result) =>
      res.render("index", { title: "Homepage blogs", blogs: result })
    )
    .catch((err) => res.send(err));
};
const blog_add = (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("back")) //redirect the same page!
    .catch((err) => res.send(err));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  console.log({ id });
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((err) => res.status(404).render("404", { title: "Blog not found" }));
};
const blog_create_view = (req, res) => {
  const data = {
    title: "Welcome to My Website",
    message: "Hello, world!",
  };
  res.render("blog", data);
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => res.send(err));
};

module.exports = {
  blog_index,
  blog_add,
  blog_details,
  blog_create_view,
  blog_delete,
};
