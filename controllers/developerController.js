const HTTPStatus = require("http-status");
const Developer = require("../models/developer");

const getAll = async (req, res, next) => {
  try {
    const developers = await Developer.find();
    return res.status(HTTPStatus.OK).json({
      developers
    });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const getById = async (req, res, next) => {
  const developer = await Developer.findById(req.params.id);

  try {
    return res.status(HTTPStatus.OK).json({
      developer
    });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const create = async (req, res, next) => {
  try {
    return res
      .status(HTTPStatus.CREATED)
      .json(await Developer.create(req.body));
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const deleteDeveloper = async (req, res, next) => {
  try {
    const developer = await Developer.findById(req.params.id);
    await developer.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const updateDeveloper = async (req, res, next) => {
  try {
    const developer = await Developer.findById(req.params.id);

    Object.keys(req.body).forEach(key => {
      developer[key] = body[key];
    });

    return res.status(HTTPStatus.OK).json(await developer.save());
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

module.exports = {
  getById,
  getAll,
  create,
  updateDeveloper,
  deleteDeveloper
};
