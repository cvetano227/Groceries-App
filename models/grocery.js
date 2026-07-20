const fs = require("fs");

const file = "./groceries.json";

function readGroceries() {
  const data = fs.readFileSync(file, "utf-8");

  return JSON.parse(data);
}

function saveGroceries(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function list() {
  return readGroceries();
}

function add(grocery) {
  const groceries = readGroceries();

  groceries.push(grocery);

  saveGroceries(groceries);
}

function remove(index) {
  const groceries = readGroceries();

  groceries.splice(index, 1);

  saveGroceries(groceries);
}

function getSingle(index) {
  const groceries = readGroceries();

  return groceries[index];
}

function edit(index, updatedGrocery) {
  const groceries = readGroceries();

  groceries[index] = updatedGrocery;

  saveGroceries(groceries);
}

module.exports = {
  list,
  add,
  remove,
  getSingle,
  edit,
};
