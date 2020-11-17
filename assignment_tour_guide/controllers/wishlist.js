const express = require("express");
const wishlistModel = require.main.require("./models/wishlistModel");
const router = express.Router();

router.get("/", (req, res) => {
  wishlistModel.getAll(req.cookies["uname"], function (results) {
    res.render("wishlist/index", {
      place: results,
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });
});

router.post("/", (req, res) => {
  wishlistModel.getByName(req.body.searchInput, function (results) {
    console.log(req.body.searchInput);
    res.render("wishlist/index", {
      place: results,
      name: req.cookies["uname"],
      type: req.cookies["type"],
    });
  });
});

router.get("/:id", (req, res) => {
  wishlistModel.delete(req.params.id, function (results) {
    res.redirect("/wishlist");
  });
});

module.exports = router;
