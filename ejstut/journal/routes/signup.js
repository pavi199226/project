const express = require("express");
const router = express();
const bparser = require("body-parser");
router.use(bparser.urlencoded({ extended: true }));
router.use(bparser.json());
router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "signup" });
});
router.post("/signup", function (req, res, next) {
  const details = [
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dob: req.body.dob,
      email: req.body.email,
      password: req.body.password,
    },
  ];
  console.log(req.body);
  res.send(details);
});

router.post("/members", function (req, res, next) {
  const details = [
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dob: req.body.dob,
      email: req.body.email,
      password: req.body.password,
    },
  ];
  console.log(req.body);
  res.send(details);
});
router.get("/", (req, res) => {
  res.redirect("/signup");
});
router.get("/members", (req, res) => {
  res.render("member", { title: req.body.username });
});
module.exports = router;
