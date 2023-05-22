const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoutes = require("./routes/blogRoutes");

//connect to mongodb
const dbURI =
  "mongodb+srv://netNinja:z7ABtyHTPKJmbk9K@cluster0.ve91vkf.mongodb.net/netNinja?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("server is listening port 3000");
});
//create public folder on the root of the proj,
// and the content will be assessable in ejs files, when we import
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  // console.log("path", req.path);
  // console.log("host", req.hostname);
  // console.log("method", req.method);
  next();
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.use(blogRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});
