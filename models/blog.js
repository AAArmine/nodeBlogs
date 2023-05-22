const mongoose = require("mongoose");
const Schema = mongoose.Schema; //with capital S

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); //automatically generates timestamps for blog

//create model:common practice the name with capital letter for models
//the first arg is very important, coz its gonna pluralize it, to look for that collection in DB
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
