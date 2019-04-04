const Router = require("express");

const ProjectController = require("../controllers/projectController");

const routes = new Router();

routes.get("/", ProjectController.getAll);
routes.get("/:id", ProjectController.getById);
routes.patch("/:id", ProjectController.updateProject);
routes.post("/", ProjectController.create);
routes.delete("/:id", ProjectController.deleteProject);

module.exports = routes;
