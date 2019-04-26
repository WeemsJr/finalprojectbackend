const express = require("express");
const router = express.Router();

const ProductController = require("../../controller/productController");
const productController = new
ProductController();

router.get("/", function (req, res) {
    productController.findAll(res);
});

router.get("/", function (req, res) {
    productController.findById(res);
});

module.exports = router;

