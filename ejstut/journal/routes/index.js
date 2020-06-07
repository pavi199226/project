const express = require("express");
const bparser = require("body-parser");
const mongoose = require("mongoose");
const io = require("socket.io")(5000);
io.on("connection", (socket) => {
  socket.emit("chat-message", "hi");
});

const router = express.Router();
mongoose.connect(
  "mongodb://localhost:27017/config",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("successful");
    }
  }
);
const User = require("../schema/formdata.model");

router.get("/index", function (req, res, next) {
  res.render("index", { title: "yourpregnancyjournal" });
  res.render("signup", { title: "signup" });
});
router.use(bparser.urlencoded({ extended: true }));
router.use(bparser.json());
/*router.post("/index", (req, res) => {
  const details = [
    {
      username: req.body.username,
      password: req.body.password,
    },
  ];
  console.log(req.body);
  res.send(details);
  var userrec = new User({
    username: req.body.username,
    password: req.body.password,
  });
  userrec
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("error!", err);
    });
});*/
router.post("/members", (req, res) => {
  router.use(express.static("./"));
  res.render("member", { user: req.body.username });
  const details = [
    {
      username: req.body.username,
      password: req.body.password,
    },
  ];
  //insert(req, res);
  var userrec = new User({
    username: req.body.username,
    password: req.body.password,
  });
  userrec
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("error!", err);
    });

  console.log(req.body);
  res.send(details);
});
function insert(req, res) {
  var userrec = new User({
    username: req.body.username,
    password: req.body.password,
  });
  userrec
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("error!", err);
    });
}
router.get("/", (req, res) => {
  res.redirect("/index");
});
router.get("/members", (req, res) => {
  res.render("member", { title: req.body.username });
});

module.exports = router;
