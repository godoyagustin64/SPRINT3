const express = require("express");
const router = express.Router();

router.get("/detail-product", (req, res) => {

    res.render("detail-product.ejs");

});

module.exports = router;