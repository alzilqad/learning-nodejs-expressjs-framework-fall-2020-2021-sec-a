const express = require("express");
const scoutModel = require.main.require("./models/scoutModel");
const router = express.Router();

router.get("/", (req, res) => {
  scoutModel.getAll(function (results) {
    res.render("scout/index", {
      users: results,
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });
});

router.post("/", (req, res) => {
  scoutModel.getByName(req.body.searchInput, function (results) {
    console.log(req.body.searchInput);
    res.render("scout/index", {
      users: results,
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });

  router.get("/create", (req, res) => {
    res.render("scout/create", {
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
    scoutModel.insert(user, function (result) {
      if (result) {
        res.redirect("/scout");
      } else {
        res.send("Scout has not been Created");
      }
    });
  });

  router.get("/edit/:id", (req, res) => {
    scoutModel.getById(req.params.id, function (results) {
      res.render("scout/edit", {
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
    scoutModel.update(req.params.id, user, function (result) {
      if (result) {
        res.redirect("/scout");
      } else {
        res.send("Scout has not been Updated");
      }
    });
  });

  router.get("/delete/:id", (req, res) => {
    scoutModel.getById(req.params.id, function (results) {
      res.render("scout/delete", {
        user: results[0],
        name: req.cookies["uname"],
        type: req.cookies["type"],
      });
    });
  });

  router.post("/delete/:id", (req, res) => {
    scoutModel.delete(req.params.id, function (results) {
      res.redirect("/scout");
    });
  });
});

module.exports = router;
