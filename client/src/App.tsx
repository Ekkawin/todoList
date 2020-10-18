import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import './styles/tailwind.css';
import { Route, Switch } from 'react-router';

import { Login } from './features/Login';
import { TodoListPage } from './features/TodoListPage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/:name">
        <TodoListPage />
      </Route>
    </Switch>
  );
}

export default App;
