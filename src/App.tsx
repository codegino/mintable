import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button color123="blue">ASD</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
