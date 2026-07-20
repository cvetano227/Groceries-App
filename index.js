const express = require("express");

const groceryRoutes = require("./routes/groceryRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(groceryRoutes);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
