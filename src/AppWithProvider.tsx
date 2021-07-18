import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './store';
import {Provider as StoreProvider} from 'react-redux';
import App from './App';

export default function AppWithProvider() {
  return (
    <StoreProvider store={store}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  );
}
