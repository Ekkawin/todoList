import React from 'react';

import { PageWrapper } from './PageWrapper';
import { TaskList } from './TaskList';

export const TodoListPage = () => {
  return (
    <PageWrapper>
      <div className="grid grid-cols-3 gap-4">
        <TaskList date={'Today'} />
        <TaskList date={'Tomorrow'} />
        <TaskList date={'UpComming'} />
      </div>
    </PageWrapper>
  );
};
