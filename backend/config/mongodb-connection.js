const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = mongoose.connection;
