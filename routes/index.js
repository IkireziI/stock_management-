const express = require('express');
const allRoutes = express.Router();

const stockRoutes = require('./stock.routes');
// const userRoutes = require('./user.routes');

allRoutes.use('/stock', stockRoutes);
// allRoutes.use('/user', userRoutes);

module.exports = allRoutes;