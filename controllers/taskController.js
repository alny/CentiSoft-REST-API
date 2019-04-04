const HTTPStatus = require("http-status");
const Task = require("../models/task");

const getAll = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    return res.status(HTTPStatus.OK).json({
      tasks
    });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const getById = async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  try {
    return res.status(HTTPStatus.OK).json({
      task
    });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const create = async (req, res, next) => {
  try {
    return res.status(HTTPStatus.CREATED).json(await Task.create(req.body));
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    await task.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    Object.keys(req.body).forEach(key => {
      task[key] = body[key];
    });
    return res.status(HTTPStatus.OK).json(await task.save());
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

module.exports = {
  getById,
  getAll,
  create,
  updateTask,
  deleteTask
};
