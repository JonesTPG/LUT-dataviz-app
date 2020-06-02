import React from 'react';
import CovidCards from './components/CovidCards';
import Navbar from './components/NavBar';
import Home from './components/Home';
import CovidCard from './components/CovidCard';

import { Route, Switch } from 'react-router';

let App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home></Home>} />
        <Route exact path="/cards" render={() => <CovidCards></CovidCards>} />
        <Route path="/cards/:id" render={() => <CovidCard></CovidCard>} />
      </Switch>
    </>
  );
};

export default App;
