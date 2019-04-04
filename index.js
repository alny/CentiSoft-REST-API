const express = require("express");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");

require("./config/database");
const middlewaresConfig = require("./config/middlewares");
const constants = require("./config/constants");
const ApiRoutes = require("./routes");

const app = express();
const ProtectedRoutes = express.Router();

// Wrap all the middlewares with the server
middlewaresConfig(app);

// Add the apiRoutes stack to the server with protected routes
app.use("/api", ProtectedRoutes, ApiRoutes);
app.get("/", (req, res) => {
  res.send(`
    <div style="position: absolute; top:0; bottom: 0; left: 0; right: 0; margin: auto; width: 350px;height: 350px;">
      <h4>Welcome to the Centisoft REST API</h4>
      <div>
        Customers Routes:  <a href="/api/customer">Customers route</a><br/>
        Developer Routes:  <a href="/api/developer">Developer route</a><br/>
        Project Routes:  <a href="/api/project">Project route</a><br/>
        Task Routes:  <a href="/api/task">Task route</a>
      </div>
    </div>
  `);
});

app.get("/generateToken", (req, res) => {
  const payload = {
    Centrisoft: true
  };
  var token = jwt.sign(payload, "mySecret", {
    expiresIn: 99999999
  });
  res.send({ token });
});

ProtectedRoutes.use((req, res, next) => {
  var token = req.headers["access-token"];
  if (token) {
    jwt.verify(token, "mySecret", (err, decoded) => {
      if (err) {
        return res.json({ message: "Invalid token" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      message: "No token provided."
    });
  }
});

// We need this to make sure we don't run a second instance
app.listen(constants.PORT, err => {
  if (err) {
    console.log(chalk.red("Cannot run!"));
  } else {
    console.log(
      chalk.green.bold(
        `
        Server running... Cheers! 🍺
        REST API on port: ${constants.PORT} 🍕
        Environment: ${process.env.NODE_ENV} 🦄
      `
      )
    );
  }
});

module.exports = app;
