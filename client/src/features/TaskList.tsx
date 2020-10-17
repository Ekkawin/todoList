/** @jsx jsx */
import React from 'react';
import { TaskCard } from './TaskCard';
import { Button, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { css, jsx, Global } from '@emotion/core';

interface Props {
  date: string;
}

export const TaskList = (props: Props) => (
  <div className="col-span-1 text-xl text-blue-500">
    <Global
      styles={css`
        .ant-form.ant-form-horizontal {
          width: 100% !important;
        }
      `}
    />
    {props.date}
    <div className="flex flex-col items-center">
      <Form>
        <Form.List name="names">
          {(fields, { add, remove }, { errors }) => {
            return (
              <div className="w-full">
                <Button
                  className="w-full"
                  css={css`
                    background-color: #d9d9d9;
                  `}
                  onClick={() => {
                    console.log('onClick');
                    add();
                  }}
                >
                  +
                </Button>
                {fields.map((field, index) => (
                  <Form.Item key={field.key}>
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      noStyle
                    >
                      <TaskCard>Call</TaskCard>
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item className="w-full">
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
      </Form>
    </div>
  </div>
);
