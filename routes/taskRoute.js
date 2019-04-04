const Router = require("express");

const TaskController = require("../controllers/taskController");

const routes = new Router();

routes.get("/", TaskController.getAll);
routes.get("/:id", TaskController.getById);
routes.patch("/:id", TaskController.updateTask);
routes.post("/", TaskController.create);
routes.delete("/:id", TaskController.deleteTask);

module.exports = routes;
