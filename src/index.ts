import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

console.log('hi');

createConnection()
  .then(async (connection) => {
    let user = new User();
    await connection.manager.save(user);
    console.log('connection', connection);
    console.log('connected');

    // here you can start to work with your entities
  })
  .catch((error) => {
    console.log('error');

    console.log(error);
  });
