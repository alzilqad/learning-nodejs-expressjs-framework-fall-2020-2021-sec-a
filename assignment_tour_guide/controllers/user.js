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

  router.get("/create", (req, res) => {
    res.render("user/create", {
        name: req.cookies["uname"],
        type: req.cookies["type"],
      });
  });

  router.post("/create", (req, res) => {
    var user = [
      req.body.username,
      req.body.password,
      req.body.full_name,
      req.body.contact_no,
      req.body.email,
      req.body.address,
      req.body.gender,
      req.body.dob,
      req.body.type,
    ];
    userModel.insert(user, function (result) {
      if (result) {
        res.redirect("/user");
      } else {
        res.send("User has not been Created");
      }
    });
  });

  router.get("/edit/:id", (req, res) => {
    userModel.getById(req.params.id, function (results) {
      res.render("user/edit", {
        user: results[0],
        name: req.cookies["uname"],
        type: req.cookies["type"],
      });
    });
  });

  router.post("/edit/:id", (req, res) => {
    var user = [
      req.body.username,
      req.body.password,
      req.body.full_name,
      req.body.contact_no,
      req.body.email,
      req.body.address,
      req.body.gender,
      req.body.dob,
      req.body.type,
    ];
    userModel.update(req.params.id, user, function (result) {
      if (result) {
        res.redirect("/user");
      } else {
        res.send("User has not been Updated");
      }
    });
  });

  router.get("/delete/:id", (req, res) => {
    userModel.getById(req.params.id, function (results) {
      res.render("user/delete", {
        user: results[0],
        name: req.cookies["uname"],
        type: req.cookies["type"],
      });
    });
  });

  router.post("/delete/:id", (req, res) => {
    userModel.delete(req.params.id, function (results) {
      res.redirect("/user");
    });
  });
  
});

module.exports = router;
