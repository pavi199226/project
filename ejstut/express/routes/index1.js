var express = require("express");
var router = express.Router();
router.get("/", (req, res) => {
  res.send("welcome to index page");
});
module.exports = router;
