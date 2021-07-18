import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import {Route, Switch} from 'react-router-dom';
import CategoryLinks from './components/CategoryLinks';
import HeroSection from './components/HeroSection';
import NotificationHeader from './components/NotificationHeader';

function App(): JSX.Element {
  return (
    <div className="App">
      <NotificationHeader />
      <AppHeader />
      <CategoryLinks />
      <HeroSection />
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
