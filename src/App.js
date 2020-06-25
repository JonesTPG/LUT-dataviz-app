import React from 'react';
import CovidCards from './components/cards/CovidCards';
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

        <Route exact path="/cards" render={() => <CovidCards></CovidCards>} />
        <Route path="/cards/:id" render={() => <CovidCard></CovidCard>} />
      </Switch>
    </>
  );
};

export default App;
