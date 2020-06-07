const express = require("express");
const bparser = require("body-parser");
const router = express();
router.get("/members", (req, res) => {
  res.render("member", { user: "user" });
});
module.exports = router;
