const express = require('express');
const crypto = require('crypto');
const connection =require('./database/connection');
const OngController = require('./controler/OngController');
const IncidentController = require('./controler/IncidentController');
const ProfileController = require('./controler/ProfileController');
const SessionController = require('./controler/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);
routes.get('/profile', ProfileController.index)
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;