const express = require("express");
const db = require("./config/mongodb-connection");
const cookieParser = require("cookie-parser");
const cardRoutes = require("./routes/cardRoutes");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoute");
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use("/card", cardRoutes);
app.use("/user", userRoutes);
app.use(cors());

app.listen(3000, () => {
  console.log("server running on localhost:3000");
});
