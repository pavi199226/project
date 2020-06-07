const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/config",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("successful");
    }
  }
);
require("./formdata.model");
