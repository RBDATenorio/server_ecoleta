import express, { request } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
// tell to express to work with rest api
app.use(express.json());
// using routes
app.use(routes);
// static files
app.use('/uploads', express.static(path.resolve(__dirname,'..', 'uploads')));

app.listen(3333);