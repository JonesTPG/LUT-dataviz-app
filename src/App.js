import React from 'react';

import Navbar from './components/NavBar';
import Welcome from './components/Welcome';
import Assignment from './components/Assignment';
import Survey from './components/Survey';
import ThankYou from './components/ThankYou';

import { useStickyState } from './hooks/common';
import { getRandomInt } from './utils/randomize';

let App = () => {
  const [page, setPage] = useStickyState('welcome', 'page');
  const [progress, setProgress] = useStickyState(0, 'progress');
  const [answer, setAnswer] = useStickyState('', 'assignment-answer');
  const [applicationVersion, setApplicationVersion] = useStickyState(
    getRandomInt(1, 3),
    'application-version'
  );
  const [AMTCode, setAMTCode] = useStickyState('', 'AMTCode');

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
        setStickyAnswer={setAnswer}
        setProgress={setProgress}
        applicationVersion={applicationVersion}
      />
      <Survey
        show={page === 'survey'}
        setPage={setPage}
        setProgress={setProgress}
        answer={answer}
        applicationVersion={applicationVersion}
        setAMTCode={setAMTCode}
      />
      <ThankYou show={page === 'thankyou'} AMTCode={AMTCode} />
    </>
  );
};

export default App;
