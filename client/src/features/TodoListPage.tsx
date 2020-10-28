import React, { useState, useEffect } from 'react';
import { Form, Button, Spin } from 'antd';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { PageWrapper } from './PageWrapper';
import { TaskList } from './TaskList';
import { UpCommingTask } from './UpCommingTask';
import { todoAxios } from './axios';
// import axios from 'axios';

export const TodoListPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<any>([]);
  const [userId, setuserId] = useState(null);
  const location = useLocation();

  const onFinish = async (value) => {
    console.log('value', value);
    if (tasks?.userId) {
      const allTasks = [...value?.taskToday, ...value?.taskTomorrow];
      console.log('allTasks', allTasks);
      try {
        const res = await todoAxios.put(`http://localhost:5000/api/user`, {
          // userId: tasks?.userId,
          userName: 'tasks?.userName',
          tasks: [],
        });
      } catch (error) {
        console.error(error);
      }
      // const data = {
      //   userId: tasks?.userId,
      //   userName: tasks?.userName,
      //   tasks: allTasks,
      // };
      // const res = await axios.put(`http://localhost:5000/api/user${location?.pathname}`, data);
      // console.log('res', res);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const task = todoAxios
      .get(`/user${location?.pathname}`)
      .then((taskLists) => {
        setTasks(taskLists?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const test = moment('2020-10-27')?.add(3, 'days')?.format('DD-MMM-YYYY');

  const taskTodays = tasks?.tasks?.filter((task) => {
    moment(task.date)?.isSame(moment(), 'days');
  });

  const taskTomorrows = tasks?.tasks?.filter((task) => {
    return moment(task.date)?.isSame(moment().add(1, 'day'), 'day');
  });

  const taskUpCommings = tasks?.tasks?.filter((task) =>
    moment(task.date)?.isSameOrAfter(moment().add(1, 'days'))
  );

  console.log('taskTodays', taskTodays);
  console.log('taskTomorrows', taskTomorrows);
  console.log('tasks', tasks);

  if (isLoading) return <></>;
  return (
    <Spin spinning={isLoading}>
      <PageWrapper>
        <Form
          onFinish={onFinish}
          initialValues={{
            taskToday: taskTodays,
            taskTomorrow: taskTomorrows,
            taskUpComming: taskUpCommings,
          }}
        >
          <div className="grid grid-cols-3 gap-4">
            {<TaskList date={'Today'} />}
            <TaskList date={'Tomorrow'} />
            {/* <UpCommingTask date={'UpComming'} /> */}
          </div>
          <Button htmlType="submit">Save</Button>
        </Form>
      </PageWrapper>
    </Spin>
  );
};
