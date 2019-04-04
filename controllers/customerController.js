const HTTPStatus = require("http-status");
const Customer = require("../models/customer");

const getAll = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    return res.status(HTTPStatus.OK).json({
      customers
    });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const getById = async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);

  try {
    return res.status(HTTPStatus.OK).json({
      customer
    });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const create = async (req, res, next) => {
  try {
    return res.status(HTTPStatus.CREATED).json(await Customer.create(req.body));
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    await customer.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);

    Object.keys(req.body).forEach(key => {
      customer[key] = body[key];
    });

    return res.status(HTTPStatus.OK).json(await customer.save());
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
};

module.exports = {
  getById,
  getAll,
  create,
  updateCustomer,
  deleteCustomer
};
