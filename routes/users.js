var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/details", function (req, res, next) {
  res.send("/users/details page");
});
router.get("/info", function (req, res, next) {
  res.send("/users/info page");
});
router.get("/info/mine", function (req, res, next) {
  res.send("/users/info/mine page");
});
module.exports = router;
