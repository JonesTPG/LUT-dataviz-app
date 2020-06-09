import React from 'react';
import DataCards from './components/DataCards';
import Navbar from './components/NavBar';
import Home from './components/Home';
import DataCard from './components/DataCard';

import { Route, Switch } from 'react-router';

let App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home></Home>} />
        <Route exact path="/cards" render={() => <DataCards></DataCards>} />
        <Route path="/cards/:id" render={() => <DataCard></DataCard>} />
      </Switch>
    </>
  );
};

export default App;
