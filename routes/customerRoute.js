const Router = require("express");

const CustomerController = require("../controllers/customerController");

const routes = new Router();

routes.get("/", CustomerController.getAll);
routes.get("/:id", CustomerController.getById);
routes.patch("/:id", CustomerController.updateCustomer);
routes.post("/", CustomerController.create);
routes.delete("/:id", CustomerController.deleteCustomer);

module.exports = routes;
