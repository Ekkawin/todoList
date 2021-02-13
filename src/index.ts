import { createConnection, getConnection } from 'typeorm';
import { createExpressServer } from 'routing-controllers';
// import ormconfig from '../ormconfig';
import { User } from './entity/User';
import { Task } from './entity/Task';
import * as express from 'express';
import { UserController } from './controllers';

var moment = require('moment');
var cors = require('cors');

createConnection().then(async (connection) => {
  const userRepository = connection.getRepository(User);
  const taskRepository = connection.getRepository(Task);
  console.log('userRepository', userRepository);

  const app = createExpressServer({
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
    classTransformer: false,
    routePrefix: '/api',
    controllers: [UserController], // we specify controllers we want to use
  });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'domain-a.com');
    res.header(
      'Access-Control-Allow-Methods',
      'POST, GET, PUT, PATCH, DELETE, OPTIONS'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Option, Authorization'
    );
    return next();
  });

  app.use(express.json());

  console.log('connecting');
  app.post('/api/addList', async (req, res) => {
    console.log('req', req.body);
    const data = {
      name: req?.body?.name,
      date: moment()?.toISOString(),
      task: req?.body?.task,
    };
    //  const results = await userRepository.save(data);
    //  console.log('results', results)

    res.send('hi');
  });
  app.get('/api/find', async (req, res) => {
    const findUser = await userRepository.find();
    console.log('findUser', findUser);
    res.send(findUser);
  });
  app.get('/api/find/:id', async (req, res) => {
    console.log('req.params', req.params.id);
    const results = await userRepository.findOne(req.params.id);
    return res.send(results);
  });
  // app.post('api/create', async (req, res) => {
  //   const user = new User();
  //   const task = new Task();

  //   await userRepository.save(user);
  //   await taskRepository.save(task);

  // });
  app.post('/api/create/user', async (req, res) => {
    console.log('create User');

    const response = await userRepository.save({
      userName: 'Aek',
    });

    console.log('response', response);
    return res.send(response);
  });
  app.post('/api/create/task', async (req, res) => {
    console.log('create User');

    const response = await taskRepository.save({
      taskName: 'work',
      date: '24-10-2020',
    });

    console.log('response', response);
    return res.send(response);
  });
  app.get('/get/task', async (req, res) => {
    const get = await taskRepository.findOne();
    const getUser = await userRepository.findOne();
    getUser.tasks = [get];
    const response = await userRepository.save(getUser);
    console.log('getUser', getUser);

    return res.send(response);
  });

  app.listen(5000);
  console.log('done');
});
