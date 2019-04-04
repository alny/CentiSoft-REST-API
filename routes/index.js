const Router = require("express");

const CustomerRoutes = require("./customerRoute");
const DeveloperRoutes = require("./developerRoute");
const ProjectRoutes = require("./projectRoute");
const TaskRoutes = require("./taskRoute");

const routes = new Router();

routes.use("/customer", CustomerRoutes);
routes.use("/developer", DeveloperRoutes);
routes.use("/project", ProjectRoutes);
routes.use("/task", TaskRoutes);

module.exports = routes;
