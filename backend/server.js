const express = require("express");
const db = require("./config/mongodb-connection");
const cookieParser = require("cookie-parser");
const cardRoutes = require("./routes/cardRoutes");
const app = express();

app.use(cookieParser());

app.use("/card", cardRoutes);

app.listen(3000, () => {
  console.log("server running on localhost:3000");
});
