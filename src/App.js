import React from 'react';

import Navbar from './components/NavBar';
import Welcome from './components/Welcome';
import Assignment from './components/Assignment';
import Survey from './components/Survey';

import { useStickyState } from './hooks/common';

let App = () => {
  const [page, setPage] = useStickyState('welcome', 'page');
  const [stickyAnswer, setStickyAnswer] = useStickyState(
    '',
    'assignment-answer'
  );

  return (
    <>
      <Navbar />
      <Welcome show={page === 'welcome'} setPage={setPage} />
      <Assignment
        show={page === 'assignment'}
        setPage={setPage}
        setStickyAnswer={setStickyAnswer}
      />
      <Survey show={page === 'survey'} setPage={setPage} />
    </>
  );
};

export default App;
