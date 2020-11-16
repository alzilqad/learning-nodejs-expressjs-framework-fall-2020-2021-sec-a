const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login/index", {name: req.cookies['uname'], type: req.cookies['type']});
});

router.post("/", (req, res) => {
  var user = {
    username: req.body.username,
    password: req.body.password,
  };

  userModel.validate(user, function (status, type) {
    if (status) {
	  res.cookie("uname", req.body.username);
	  res.cookie("type", "");
	  res.cookie("type", type);
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  });
});

module.exports = router;
