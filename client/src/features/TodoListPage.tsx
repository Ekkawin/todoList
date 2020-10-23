import React, { useState, useEffect } from 'react';
import { Form, Button, Spin } from 'antd';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { PageWrapper } from './PageWrapper';
import { TaskList } from './TaskList';
import { UpCommingTask } from './UpCommingTask';
import { Axios } from './axios';

export const TodoListPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<any>([]);
  const location = useLocation();

  console.log('slug', location);
  const onFinish = (value) => {
    console.log('OnFinish');

    console.log('value', value);
  };

  useEffect(() => {
    setIsLoading(true);
    console.log('localtion?.pathname', location?.pathname);
    const task = Axios.get(`/user${location?.pathname}`)
      .then((taskLists) => {
        console.log('taskLists', taskLists?.data);
        setTasks(taskLists?.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log('tasks', tasks);

  const taskTodays = tasks?.filter((task) =>
    moment(task.date)?.isSame(moment())
  );
  const taskTomorrows = tasks?.filter((task) =>
    moment(task.date)?.isSame(moment().add(1, 'days'))
  );
  const taskUpCommings = tasks?.filter(
    (task) =>
      !moment(task.date)?.isSame(moment()) &&
      moment(task.date)?.isSame(moment().add(1, 'days'))
  );
  console.log('taskTodays', taskTodays);
  useEffect(() => {}, [tasks]);
  return (
    <PageWrapper>
      <Spin spinning={isLoading}>
        <Form onFinish={onFinish} initialValues={{ taskToday: ['aek', 'aek'] }}>
          {/* initialValue={{taskToday:taskTodays,
         taskTomorrow:taskTomorrows,taskUpComming:taskUpCommings}}> */}
          <div className="grid grid-cols-3 gap-4">
            {<TaskList tasks={tasks} date={'Today'} />}
            <TaskList tasks={tasks} date={'Tomorrow'} />
            <UpCommingTask tasks={tasks} date={'UpComming'} />
          </div>
          <Button htmlType="submit">Save</Button>
        </Form>
      </Spin>
    </PageWrapper>
  );
};
