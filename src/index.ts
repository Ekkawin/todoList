import { createConnection } from 'typeorm';
// import ormconfig from '../ormconfig';
import { User } from './entity/User';
import * as express from 'express';

createConnection().then((connection) => {
  const userRepository = connection.getRepository(User);

  // create and setup express app
  const app = express();
  app.use(express.json());

  // register routes
  console.log('connection', connection);
  console.log('connecting');

  // start express server
  app.listen(6000);
});
// const main = async () => {
//   console.log('hi!');
//   console.log('connected!');

//   const conn = await createConnection({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'aek',
//     password: 'aek',
//     database: 'todo_list',
//     entities: [User],
//     synchronize: true,
//     logging: false,
//   });

//   // await conn.close();
//   console.log('connection closed!');
// };
// main().then(() => console.log('promise finished'));

// createConnection({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'aek',
//   password: 'aekk',
//   database: 'todo_list',
//   entities: [User],
//   synchronize: true,
//   logging: true,
// })
//   .then(async (connection) => {
//     console.log('connected');
//     let user = new User();
//     await connection.manager.save(user);
//     console.log('connection', connection);
//     console.log('connected');
//   })
//   .catch((error) => {
//     console.log('error');
//     console.log(error);
//   });

console.log('done');
