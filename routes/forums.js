var express = require("express");
var router = express.Router();
var forumController = require("../controller/forums");

router.get("/", forumController.forumsIndex);
router.post("/add_product", forumController.addForum);
// here /forums/:id and /forums/delete_all are conflicting
// so i added extra delete to make single forum deleting
// as /forums/delete/:id
router.get("/delete/:id", forumController.forumDelete);
router.get("/delete_all", forumController.forumDeleteAll);
module.exports = router;
