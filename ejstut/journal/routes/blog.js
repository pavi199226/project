const express = require("express");
const router = express();
router.get("/blog", function (req, res, next) {
  res.render("blog", { title: "blog" });
});

module.exports = router;
