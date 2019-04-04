const HTTPStatus = require("http-status");
const Project = require("../models/project");

const getAll = async (req, res, next) => {
  try {
    const projects = await Project.find();
    return res.status(HTTPStatus.OK).json({
      projects
    });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const getById = async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  try {
    return res.status(HTTPStatus.OK).json({
      project
    });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const create = async (req, res, next) => {
  try {
    return res.status(HTTPStatus.CREATED).json(await Project.create(req.body));
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    await project.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    Object.keys(req.body).forEach(key => {
      project[key] = body[key];
    });
    return res.status(HTTPStatus.OK).json(await project.save());
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

module.exports = {
  getById,
  getAll,
  create,
  updateProject,
  deleteProject
};
