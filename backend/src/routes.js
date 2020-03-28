const express = require('express'); //chamando o express
const OngControllers = require('./controllers/OngController');
const IncidentControllers = require('./controllers/IncidentController');
const ProfileControllers = require('./controllers/ProfileController');
const SessionControllers = require('./controllers/SessionController');
const routes = express.Router();


routes.post('/sessions', SessionControllers.create);

//
routes.get('/ongs', OngControllers.index);
routes.post('/ongs', OngControllers.create);

//

routes.get('/profile', ProfileControllers.index);

//

routes.get('/incidents', IncidentControllers.index);
routes.post('/incidents', IncidentControllers.create);

routes.delete('/incidents/:id', IncidentControllers.delete);
//
module.exports = routes;