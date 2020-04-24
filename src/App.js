import React from 'react';
import HomePage from './pages/homepage/hompage.component.jsx';
import { Route, Switch } from 'react-router-dom';

const Hatpage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/hats' component={Hatpage} />
      </Switch>
    </div>
  );
}

export default App;
