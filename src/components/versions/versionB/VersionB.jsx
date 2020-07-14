import React from 'react';

import CovidCardSet from './cards/CovidCardSet';
import HUSCardSet from './cards/HUSCardSet';

/*

Application version B: cards are in order with story elements.

*/

const VersionB = () => {
  return (
    <>
      <p>application version B</p>

      <HUSCardSet></HUSCardSet>
      <CovidCardSet></CovidCardSet>
    </>
  );
};

export default VersionB;
