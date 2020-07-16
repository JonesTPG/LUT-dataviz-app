import React from 'react';

import CovidCardSet from './cards/CovidCardSet';
import HUSCardSet from './cards/HUSCardSet';

/*

Application version A: cards are in order without story elements.

*/

const VersionA = () => {
  return (
    <>
      <HUSCardSet></HUSCardSet>
      <CovidCardSet></CovidCardSet>
    </>
  );
};

export default VersionA;
