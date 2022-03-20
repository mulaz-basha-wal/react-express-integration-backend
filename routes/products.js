var express = require("express");
var router = express.Router();
var productController = require("../controller/products");

router.get("/", productController.productsIndex);
router.post("/add_product", productController.addProduct);
router.get("/delete/:id", productController.productsDelete);
router.get("/delete_all", productController.productsDeleteAll);
module.exports = router;
