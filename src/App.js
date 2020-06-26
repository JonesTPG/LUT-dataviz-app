import React from 'react';
import GeneralCardSet from './components/cards/GeneralCardSet';
import Navbar from './components/NavBar';
import Welcome from './components/Welcome';
import CovidCard from './components/cards/CovidCard';
import Assignment from './components/Assignment';
import Survey from './components/Survey';

import { Route, Switch } from 'react-router';

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

        <Route
          exact
          path="/cards"
          render={() => <GeneralCardSet></GeneralCardSet>}
        />
        <Route path="/cards/:id" render={() => <CovidCard></CovidCard>} />
      </Switch>
    </>
  );
};

export default App;
