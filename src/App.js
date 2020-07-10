import React from 'react';

import Navbar from './components/NavBar';
import Welcome from './components/Welcome';
import Assignment from './components/Assignment';
import Survey from './components/Survey';
import ThankYou from './components/ThankYou';

import { useStickyState } from './hooks/common';

let App = () => {
  const [page, setPage] = useStickyState('welcome', 'page');
  const [progress, setProgress] = useStickyState(0, 'progress');
  const [stickyAnswer, setStickyAnswer] = useStickyState(
    '',
    'assignment-answer'
  );

  return (
    <>
      <Navbar progress={progress} />
      <Welcome
        show={page === 'welcome'}
        setPage={setPage}
        setProgress={setProgress}
      />
      <Assignment
        show={page === 'assignment'}
        setPage={setPage}
        setStickyAnswer={setStickyAnswer}
        setProgress={setProgress}
      />
      <Survey
        show={page === 'survey'}
        setPage={setPage}
        setProgress={setProgress}
      />
      <ThankYou show={page === 'thankyou'} />
    </>
  );
};

export default App;
