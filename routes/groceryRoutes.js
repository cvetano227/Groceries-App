const express = require("express");

const router = express.Router();

const {
  getForm,
  postForm,
  getGroceries,
  deleteGrocery,
  getEdit,
  postEdit,
} = require("../controllers/groceryController");

router.get("/form", getForm);

router.post("/form", postForm);

router.get("/groceries", getGroceries);

router.get("/delete", deleteGrocery);

router.get("/edit", getEdit);

router.post("/edit", postEdit);

module.exports = router;
