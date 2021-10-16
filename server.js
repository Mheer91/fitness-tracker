const express = require('express');
const mongoose = require("mongoose");
const logger = require("morgan");
require('dotenv').config();
const apiroutes = require("./routes/api-routes");
const homeroutes = require("./routes/home-routes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(apiroutes);
app.use(homeroutes);
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  