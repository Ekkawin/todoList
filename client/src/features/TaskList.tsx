/** @jsx jsx */
import React from 'react';
import { TaskCard } from './TaskCard';
import { Button, Form, Input, Card, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { css, jsx, Global } from '@emotion/core';
import moment from 'moment';
import axios from 'axios';

import { Task } from './type';

enum Date {
  TODAY = 'Today',
  TOMORROW = 'Tomorrow',
  UPCOMMING = 'UpCommimg',
}
interface Props {
  date: string;
  tasks: Task;
}

export const TaskList = (props: any) => {
  console.log('hi');

  const onFinish = async (values) => {
    //     switch (props.date) {
    //       case Date.TODAY:
    //         const taskToday = values?.map((value) => ({
    //           task: value,
    //           date: moment(),
    //         }));
    //         await axios.
    //         break;
    //       case Date.TOMORROW:
    //         const taskTmr = values?.map((value) => ({
    //           task: value,
    //           date: moment()?.add(1, 'day'),
    //         }));
    //         break;
    //       case Date.UPCOMMING:
    //         const taskUpComming = values?.map((value) => ({
    //           task: value,
    //           date: moment()?.add(5, 'days'),
    //         }));
    //         break;
    //     }
  };

  return (
    <div className="col-span-1 text-xl text-blue-500">
      <Global
        styles={css`
          .ant-form.ant-form-horizontal {
            width: 100% !important;
          }
          .ant-form-item-control-input-content {
            display: flex;
            align-items: center;
            margin-top: 0.5rem;
          }
          .ant-row.ant-form-item {
            margin-bottom: 0px !important;
          }
        `}
      />
      {props.date}
      <div className="flex flex-col items-center">
        <Form.List name={`task${props.date}`} key={`task${props.date}`}>
          {(fields, { add, remove }, { errors }) => {
            console.log('props', props);

            console.log('fields', fields);
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
                {fields.map((field, index) => {
                  console.log('field', field);
                  return (
                    <Card key={field.key}>
                      <Form.Item
                        {...field}
                        name={[field.name, 'taskName']}
                        fieldKey={[field.fieldKey, 'taskName']}
                        validateTrigger={['onChange', 'onBlur']}
                        noStyle
                      >
                        <Input key={1} className="px-2 py-4 rounded" />
                      </Form.Item>

                      <Form.Item
                        {...field}
                        name={[field.fieldKey, 'date']}
                        fieldKey={[field.fieldKey, 'date']}
                        validateTrigger={['onChange', 'onBlur']}
                        noStyle
                      >
                        <Input
                          key={2}
                          disabled={true}
                          className="px-2 py-4 rounded"
                        />
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
                    </Card>
                  );
                })}
                <Form.Item className="w-full">
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
      </div>
    </div>
  );
};
