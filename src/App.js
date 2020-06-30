import React, { useEffect, useState } from 'react';

import Navbar from './components/NavBar';
import Welcome from './components/Welcome';
import Assignment from './components/Assignment';
import Survey from './components/Survey';

import { useStickyState } from './hooks/common';

let App = () => {
  const [page, setPage] = useStickyState('welcome', 'page');

  return (
    <>
      <Navbar />
      <Welcome show={page === 'welcome'} setPage={setPage} />
      <Assignment show={page === 'assignment'} setPage={setPage} />
      <Survey show={page === 'survey'} setPage={setPage} />
    </>
  );
};

export default App;
