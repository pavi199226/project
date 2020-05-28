const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();

//const welcome = require("/routes/user.js");
var indexRouter = require("./routes/index1");
var home = require("./routes/home");
app.use("/", indexRouter);
app.use(log);

//app.use("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/home", home);
app.get("/home", (req, res) => {
  res.render("home", { title: "mitu" });
});
app.get("/blog", (req, res) => {
  res.render("blog", { username: "mitu" });
});
app.post("/blog/user", (req, res) => {
  let data = {
    username: req.query,
  };

  console.log(data, res.json());
});
function log(req, res, next) {
  console.log("logs");
  next();
}
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${__dirname}/uploads`);
  },
  filename: (req, file, callback) => {
    // mimetypes
    var extension = {
      "image/jpeg": ".jpg",
      "image/png": ".png",
      "image/gif": ".gif",
    };

    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      // file.originalname.substr(0,file.originalname.length-4)
      let output = "image-" + Date.now() + extension[file.mimetype]; // .jpg .png .gif
      // image-4384784348734
      callback(null, output);
    } else {
      console.log("This mimetype is not allowed");
    }

    // oskjdkjasdiasiodoaisdahjdihnasduasuidauisdhuiashduhauisdhuasduhuaisdhasd.jpg
    // image-timestampformate
    // image-4347878374.jpg
  },
});

var upload = multer({
  storage: storage,
  limits: { fileSize: 1024000 },
}).single("currentFile");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname + "index.html");
});
app.post("/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      res.end("error");
    } else {
      res.end("file is uploaded");
    }
  });
});

app.listen(5005, () => console.log("listening"));
