const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost/acme_store', { logging: true });

module.exports = conn;
