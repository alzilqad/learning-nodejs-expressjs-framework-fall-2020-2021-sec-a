const express = require("express");
const jobModel = require.main.require("./models/jobModel");
const router = express.Router();

router.get("*", (req, res, next) => {
  if (req.cookies["uname"] == null) {
    res.redirect("/login");
  } else {
    next();
  }
});

router.get("/create", (req, res) => {
  res.render("job/create");
});

router.post("/create", (req, res) => {
  var job = [
    req.body.companyName,
    req.body.title,
    req.body.location,
    req.body.salary,
  ];
  jobModel.insert(job, function (result) {
    if (result) {
      res.send("Job has been Created");
    } else {
      res.send("Job has not been Created");
    }
  });
});

router.get("/edit/:id", (req, res) => {
  // console.log(req.params.id);
  jobModel.getById(req.params.id, function (results) {
    res.render("job/edit", results[0]);
  });
});

router.post("/edit/:id", (req, res) => {
  var job = [
    req.body.companyName,
    req.body.title,
    req.body.location,
    req.body.salary,
  ];
  jobModel.update(req.params.id, job, function (result) {
    if (result) {
      res.send("Job has been Update");
    } else {
      res.send("Job has not been Updated");
    }
  });
});

router.get("/delete/:id", (req, res) => {
  jobModel.getById(req.params.id, function (results) {
    res.render("job/delete", results[0]);
  });
});

router.post("/delete/:id", (req, res) => {
  jobModel.delete(req.params.id, function (results) {
    // console.log(results[0].user_name);
    res.redirect("/job");
  });
});

module.exports = router;
