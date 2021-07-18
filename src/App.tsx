import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import AppWithProvider from './AppWithProvider';
import AppHeader from './components/AppHeader';
import {Route, Switch} from 'react-router-dom';

const Button = styled.button<{color123: string}>`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: ${prop => prop.color123};
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

function App(): JSX.Element {
  return (
    <div className="App">
      <AppHeader />
      <div>
        <Switch>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/users">
            <div>users</div>
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
