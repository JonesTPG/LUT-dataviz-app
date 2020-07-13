import React from 'react';

import CovidCardSet from '../cards/CovidCardSet';
import HUSCardSet from '../cards/HUSCardSet';

/*

Application version C: cards are unordered without story elements.

*/

const VersionC = () => {
  return (
    <>
      <p>application version C</p>
      <HUSCardSet></HUSCardSet>
      <CovidCardSet></CovidCardSet>
    </>
  );
};

export default VersionC;
