import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {store} from './store';
import {Provider as StoreProvider} from 'react-redux';

export default function AppWithProvider() {
  return (
    <StoreProvider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

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
      </Router>
    </StoreProvider>
  );
}
