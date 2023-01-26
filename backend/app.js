const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const Info = require ('./models/info');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.post("/api/infos", (req, res, next) => {
  const info = new Info({
   imeIPrezime: req.body.imeIPrezime,
   mjesto: req.body.mjesto,
   email: req.body.email,
  });
  console.log(info);
  res.status(201).json({
    message: 'Info added successfully'
  });
});



module.exports = app;
