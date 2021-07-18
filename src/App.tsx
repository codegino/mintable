import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import AppWithProvider from './AppWithProvider';

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
      <AppWithProvider />
    </div>
  );
}

export default App;
