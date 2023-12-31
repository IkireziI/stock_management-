const express = require('express');
const employeeRoutes = express.Router();
const { create, findById, list, remove, update  } = require('../controllers/stock.controllers');

stockRoutes.get('/list', list);
stockRoutes.post('/add', create);
stockRoutes.get('/findById/:id', findById);
stockRoutes.put('/update', update);
stockRoutes.delete('/delete', remove);

module.exports = stockRoutes;