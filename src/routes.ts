import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsContreller from './controllers/ItemsController';


const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsContreller();

// list all items
routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('points', pointsController.index);
routes.get('/points/:id', pointsController.show);
export default routes;
