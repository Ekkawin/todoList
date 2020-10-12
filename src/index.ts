import { createConnection } from 'typeorm';
// import ormconfig from '../ormconfig';
import { User } from './entity/User';
import * as express from 'express';

createConnection().then((connection) => {
  

  // create and setup express app
  console.log('connection', connection);
  
});

const app = express();
  app.use(express.json());

  // register routes
  console.log('connecting');

  // start express server
  app.listen(6000);
console.log('done');
