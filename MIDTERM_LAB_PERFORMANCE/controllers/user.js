const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("*", (req, res, next) => {
  if (req.cookies["uname"] == null) {
    res.redirect("/login");
  } else {
    next();
  }
});

router.post("/", (req, res) => {
  userModel.getByName(req.body.searchInput, function (results) {
    console.log(req.body.searchInput);
    res.render("home/userlist", { users: results });
  });
});

router.get("/create", (req, res) => {
  res.render("user/create");
});

router.post("/create", (req, res) => {
  var user = [
    req.body.user_name,
    req.body.password,
    req.body.name,
    req.body.companyName,
    req.body.contactNo,
  ];
  userModel.insert(user, function (result) {
    if (result) {
      res.send("User has been Created");
    } else {
      res.send("User has not been Created");
    }
  });
});

router.get("/edit/:id", (req, res) => {
  // console.log(req.params.id);
  userModel.getById(req.params.id, function (results) {
    // console.log(results[0].user_name);
    res.render("user/edit", results[0]);
  });
});

router.post("/edit/:id", (req, res) => {
  var user = [
    req.body.user_name,
    req.body.password,
    req.body.name,
    req.body.companyName,
    req.body.contactNo,
  ];
  userModel.update(req.params.id, user, function (result) {
    if (result) {
      res.send("User has been Update");
    } else {
      res.send("User has not been Updated");
    }
  });
});

router.get("/delete/:id", (req, res) => {
  userModel.getById(req.params.id, function (results) {
    // console.log(results[0].user_name);
    res.render("user/delete", results[0]);
  });
});

router.post("/delete/:id", (req, res) => {
  userModel.delete(req.params.id, function (results) {
    // console.log(results[0].user_name);
    res.redirect("/user");
  });
});

module.exports = router;
