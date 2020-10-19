import React, { useState, useEffect } from 'react';
import { Form, Button } from 'antd';
import { useLocation } from 'react-router-dom';

import { PageWrapper } from './PageWrapper';
import { TaskList } from './TaskList';
import { Axios } from './axios';

export const TodoListPage = () => {
  const [tasks, setTasks] = useState<any>([]);
  const location = useLocation();

  console.log('slug', location);
  const onFinish = (value) => {};

  useEffect(() => {
    console.log('localtion?.pathname', location?.pathname);
    const task = Axios.get(`/user${location?.pathname}`).then((taskLists) => {
      console.log('taskLists', taskLists);
      setTasks(taskLists);
    });
  }, []);
  console.log('tasks', tasks);
  return (
    <PageWrapper>
      <Form onFinish={onFinish}>
        <div className="grid grid-cols-3 gap-4">
          <TaskList date={'Today'} />
          <TaskList date={'Tomorrow'} />
          <TaskList date={'UpComming'} />
        </div>
        <Button htmlType="submit">Save</Button>
      </Form>
    </PageWrapper>
  );
};
