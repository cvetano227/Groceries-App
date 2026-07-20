const { list, add, remove, getSingle, edit } = require("../models/grocery");

const getForm = (req, res) => {
  res.render("form");
};

const postForm = async (req, res) => {
  const grocery = {
    name: req.body.name,

    manufacturer: req.body.manufacturer,

    quantity: req.body.quantity,

    daysLeftToUse: req.body.daysLeftToUse,

    placeWhereAvailable: req.body.placeWhereAvailable,
  };

  await add(grocery);

  res.redirect("/groceries");
};

const getGroceries = async (req, res) => {
  const data = await list();

  res.render("groceries", {
    data,
  });
};

const deleteGrocery = async (req, res) => {
  await remove(req.query.groceryIndex);

  res.redirect("/groceries");
};

const getEdit = async (req, res) => {
  const grocery = await getSingle(req.query.groceryIndex);

  res.render("edit", {
    grocery,
    index: req.query.groceryIndex,
  });
};

const postEdit = async (req, res) => {
  const updatedGrocery = {
    name: req.body.name,

    manufacturer: req.body.manufacturer,

    quantity: req.body.quantity,

    daysLeftToUse: req.body.daysLeftToUse,

    placeWhereAvailable: req.body.placeWhereAvailable,
  };

  await edit(req.body.index, updatedGrocery);

  res.redirect("/groceries");
};

module.exports = {
  getForm,
  postForm,
  getGroceries,
  deleteGrocery,
  getEdit,
  postEdit,
};
