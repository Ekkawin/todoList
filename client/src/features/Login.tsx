import React from 'react';
import { PageWrapper } from './PageWrapper';
import { Form, Input, Button } from 'antd';

import { Axios } from './axios';

const onFinish = async (value) => {
  console.log('value', value);
};
export const Login = () => {
  const [form] = Form.useForm();
  return (
    <PageWrapper>
      <Form form={form} onFinish={onFinish}>
        <div className="flex flex-col items-center">
          <h3 className=""> Who are you?</h3>
          <Form.Item className="w-64" name="name">
            <Input placeholder="Input your name" />
          </Form.Item>
          <Button htmlType="submit">Sign in</Button>
        </div>
      </Form>
    </PageWrapper>
  );
};
