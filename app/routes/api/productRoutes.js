const express = require("express");
const router = express.Router();

const ProductController = require("../../controller/productController");
const productController = new ProductController();

router.get("/", function (req, res) {
    productController.findAll(res);
});

router.get("/:id", function(req, res){
    productController.findById(req, res);
});

router.get("/cars/:color", function(req, res){
    productController.findByColor(req, res);
});

router.get("/year/:year", function(req, res){
    productController.findByYear(req, res);
});


module.exports = router;
