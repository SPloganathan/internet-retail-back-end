const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;
// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// initializing routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
// Force false not to drop/recreate table(s) on every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
