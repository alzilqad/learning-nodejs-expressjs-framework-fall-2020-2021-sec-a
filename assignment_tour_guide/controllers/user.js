const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  userModel.getAll(function (results) {
    res.render("user/index", {
      users: results,
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });
});

router.post("/", (req, res) => {
  userModel.getByName(req.body.searchInput, function (results) {
    console.log(req.body.searchInput);
    res.render("user/index", {
      users: results,
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });
});

module.exports = router;
