var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var Product = require("./models/product");
var app = express();

mongoose
  .connect(
    "mongodb+srv://meanG2:ABCabc123@cluster0.xhmn4xm.mongodb.net/ecommerce"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("error connectiong to database");
  });

//middleware->gate
app.use(cors());

//all products ->localhost:3002/products
app.get("/products", function (req, res) {
  Product.find()
    .then((productsData) => {
      res.send(productsData);
    })
    .catch((err) => {
      console.log(err);
    });
});
//get =>/product/:id
app.get("/product/:id", function (req, res) {
  var prodId = +req.params.id;
  
  Product.findOne({ id: prodId })
    .then((prodData) => {
      res.send(prodData)
    })
    .catch((err) => {
      console.log(err);
    });
});

//port number
app.listen(3002);
