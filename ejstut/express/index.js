const express = require("express");
const path = require("path");
const app = express();
app.use(log);
//app.use("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("item");
});
app.get("/home", (req, res) => {
  res.render("home", { name: "home" });
});
app.get("/blog", (req, res) => {
  res.render("blog", { username: "mitu" });
});
app.post("/blog/user", (req, res) => {
  let data = {
    username: req.query,
  };

  console.log("data");
});
function log(req, res, next) {
  console.log("logs");
  next();
}
app.listen(3000, () => console.log("listening"));
