const express = require("express");
const app = express();
const index = require("./routes/index");
const blog = require("./routes/blog");
const signup = require("./routes/signup");
//require("./schema/db");
const member = require("./routes/member");
app.set("view engine", "ejs");
app.use(index);
app.use(blog);
app.use(signup);
app.use(member);
app.listen("3000", () => {
  console.log("listening");
});
