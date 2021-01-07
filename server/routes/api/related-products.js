const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");
const mongoose = require("mongoose");

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  const productCategory = req.query.category;
  console.log(productCategory);
  const limit = +req.query.limit;
  const products = await Product.find({
    productCategory,
    _id: { $ne: mongoose.Types.ObjectId(_id) },
  }).limit(limit);
  res.json({ products });
});

module.exports = router;
