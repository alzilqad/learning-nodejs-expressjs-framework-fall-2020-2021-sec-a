const express = require("express");
const placeModel = require.main.require("./models/placeModel");
const router = express.Router();

router.get("/", (req, res) => {
  placeModel.getAll(function (results) {
    res.render("place/index", {
      place: results,
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });
});

router.post("/", (req, res) => {
  placeModel.getByName(req.body.searchInput, function (results) {
    console.log(req.body.searchInput);
    res.render("place/index", {
      place: results,
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });
});

router.get("/create", (req, res) => {
  res.render("place/create", {
    name: req.cookies["uname"],
    type: req.cookies["type"],
  });
});

router.post("/create", (req, res) => {
  var place = [
    req.body.title,
    req.body.description,
    req.body.country,
    req.body.history,
    req.cookies["uname"],
  ];
  placeModel.insert(place, function (result) {
    if (result) {
      res.redirect("/place");
    } else {
      res.send("Place has not been Created");
    }
  });
});

router.get("/edit/:id", (req, res) => {
  placeModel.getById(req.params.id, function (results) {
    res.render("place/edit", {
      place: results[0],
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });
});

router.post("/edit/:id", (req, res) => {
  var place = [
    req.body.title,
    req.body.description,
    req.body.country,
    req.body.history,
    req.cookies["uname"],
  ];
  placeModel.update(req.params.id, place, function (result) {
    if (result) {
      res.redirect("/place");
    } else {
      res.send("Place has not been Updated");
    }
  });

  router.get("/delete/:id", (req, res) => {
    placeModel.getById(req.params.id, function (results) {
      res.render("place/delete", {
        place: results[0],
        name: req.cookies["uname"],
        type: req.cookies["type"],
      });
    });
  });

  router.post("/delete/:id", (req, res) => {
    placeModel.delete(req.params.id, function (results) {
      res.redirect("/place");
    });
  });
});

module.exports = router;
