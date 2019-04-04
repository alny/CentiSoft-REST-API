const Router = require("express");

const DeveloperController = require("../controllers/developerController");

const routes = new Router();

routes.get("/", DeveloperController.getAll);
routes.get("/:id", DeveloperController.getById);
routes.patch("/:id", DeveloperController.updateDeveloper);
routes.post("/", DeveloperController.create);
routes.delete("/:id", DeveloperController.deleteDeveloper);

module.exports = routes;
