import { getConnection, getRepository } from 'typeorm';
import { User } from '../entity/User';
import { Task } from '../entity/Task';

// interface Task {
//   name: string;
//   date: string;
//   task: string;
// }

export const findUser = async () => {
  // console.log('name', name)
  // try{
  //     const connection = await getConnection()
  //     const userRepository = await connection.getRepository(User)
  //     const findUser = await userRepository.find(name)
  //     return findUser
  // }
  // catch(error)
  // {
  //     console.error(error)
  //     return error
  // }
  const userRepo = await getRepository(User)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.tasks', 'task')
    .getMany();
  return userRepo;
};
export const findUserByName = async ({ userName }) => {
  const userRepo = await getRepository(User)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.tasks', 'task')
    .where('user.userName = :userName', { userName: userName })
    .getOne();
  return userRepo;
};

export const createUser = async (props: { userName: string; tasks: any }) => {
  const newTasks = props?.tasks?.filter((task) => !task?.taskId);
  const existingTasks = props?.tasks?.filter(
    (existingTask) => !!existingTask?.taskId
  );
  console.log('newTasks', newTasks);
  const createdTasks = await Promise.all(
    newTasks?.map((newTask: Task) => createTask(newTask)) as Task[]
  );

  console.log('createdTasks', createdTasks);
  const userRepo = await getRepository(User);

  const user = {
    userName: props?.userName,
    tasks: [...createdTasks, ...existingTasks],
  };
  const response = await userRepo.save(user);
  return response;
};

export const updateUser = async (props: { userId: string; tasks: any }) => {
  const newTasks = props?.tasks?.filter((task) => !task?.taskId);
  const existingTasks = props?.tasks?.filter(
    (existingTask) => !!existingTask?.taskId
  );
  console.log('newTasks', newTasks);
  const createdTasks = await Promise.all(
    newTasks?.map((newTask: Task) => createTask(newTask)) as Task[]
  );

  console.log('createdTasks', createdTasks);
  const userRepo = await getRepository(User);
  const user = await userRepo.findOneOrFail({ userId: props?.userId });
  user.tasks = [...createdTasks, ...existingTasks];
  return createdTasks;
};

const manageTasks = async (props: any) => {
  const taskRepo = await getRepository(Task);
  const tasks = await taskRepo
    .createQueryBuilder('task')
    .where('task.taskId IN (...taskIds)', { taskIds: props.taskIds });
  const findTask = await taskRepo.findOneOrFail();
  console.log('findTask', findTask);
};

const createTask = async (props: { taskName: string; date: string }) => {
  const taskRepo = await getRepository(Task);
  const response = await taskRepo.save(props);
  console.log('resposeCreateTask', response);
  return response;
};
