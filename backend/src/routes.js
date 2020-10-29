//import {express} from ("express");
const express = require("src/node_modules/express");
const routes = express.Router();

const ProductController = require("src/controllers/ProductController");

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
