var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to Index Route Home Page");
});
router.get("/student", function (req, res, next) {
  const student = { name: "Mulaz", city: "ATP" };
  res.json(student);
});
router.get("/students", function (req, res, next) {
  const students = ["Mulaz", "Stark", "Anthony"];
  res.json(students);
});
router.get("/isPrime/:number", function (req, res, next) {
  const num = req.params.number;
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag) res.send(`<h1 style='text-align:center;'>${num} is Prime</h1>`);
  else res.send(`<h1 style='text-align:center;'>${num} is Not Prime</h1>`);
});

router.get("/fibonacci", function (req, res, next) {
  const numberOfFibonacii = 10;
  let n1 = 0,
    n2 = 1,
    nextTerm;
  let fiboList = [n1, n2];
  for (let i = 1; i <= numberOfFibonacii - 2; i++) {
    nextTerm = n1 + n2;
    fiboList.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
  }
  res.json(fiboList);
});
router.get("/fibonacci/:min/:max", function (req, res, next) {
  const min = parseInt(req.params.min);
  const max = parseInt(req.params.max);
  let n1 = 0,
    n2 = 1,
    nextTerm = n1 + n2;
  let fiboList = [];

  while (nextTerm < max) {
    nextTerm = n1 + n2;
    if (nextTerm >= min) fiboList.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
  }
  fiboList.pop();
  res.json(fiboList);
});
module.exports = router;
