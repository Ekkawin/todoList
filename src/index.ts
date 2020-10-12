import { createConnection } from 'typeorm';
// import ormconfig from '../ormconfig';
import { User } from './entity/User';
import * as express from 'express';
var cors = require('cors')

createConnection().then((connection) => {
  

  // create and setup express app
  console.log('connection', connection);
  
});

const app = express();

app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'domain-a.com')
  res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
  return next()
})


  app.use(express.json());

  // register routes
  console.log('connecting');
  app.post('/api/addList',  (req, res) =>{
    console.log('req', req.body)

    
    res.send("hi")
  })

  // start express server
  app.listen(5000);
console.log('done');
