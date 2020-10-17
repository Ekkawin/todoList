import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import './styles/tailwind.css';
import { Button, Input, Form } from 'antd';
import axios from 'axios';

import { PageWrapper } from './features/PageWrapper';
import { TaskCard } from './features/TaskCard';
import { TaskList } from './features/TaskList';

const onFinish = async (e) => {
  console.log('e', e);
  try {
    const res = await axios
      .create({
        baseURL: 'http://localhost:5000',
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .post('/api/addList', e);
    console.log('res', res);
  } catch (error) {
    console.error(error);
  }
};
function App() {
  const [form] = Form.useForm();
  return (
    <PageWrapper>
      <div className="grid grid-cols-3 gap-4">
        <TaskList date={'Today'} />
        <TaskList date={'Tomorow'} />
        <TaskList date={'UpComming'} />
      </div>
    </PageWrapper>
  );
}

export default App;
