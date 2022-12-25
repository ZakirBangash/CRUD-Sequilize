const dbConfig = require("../config/config");
const tutorial=require("./tutorial")
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//defining model and linking to DB object
db.tutorials = tutorial(sequelize, Sequelize);

module.exports = db;