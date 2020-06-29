import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';

import GeneralCardSet from './components/cards/GeneralCardSet';
import Navbar from './components/NavBar';
import Welcome from './components/Welcome';
import CovidCard from './components/cards/CovidCard';
import Assignment from './components/Assignment';
import Survey from './components/Survey';

let App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Welcome></Welcome>} />
        <Route
          exact
          path="/assignment"
          render={() => <Assignment></Assignment>}
        />
        <Route exact path="/survey" render={() => <Survey></Survey>} />

        <Route path="/cards/:id" render={() => <CovidCard></CovidCard>} />
      </Switch>
    </>
  );
};

export default App;
