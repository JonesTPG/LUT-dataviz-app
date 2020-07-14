import React from 'react';

import { Text } from '@chakra-ui/core';

import CovidCardSet from './cards/CovidCardSet';
import HUSCardSet from './cards/HUSCardSet';

/*

Application version B: cards are in order with story elements.

*/

const VersionB = () => {
  return (
    <>
      <p>application version B</p>
      <Text textAlign="center" fontSize="xl">
        Story element text 1
      </Text>
      <HUSCardSet></HUSCardSet>
      <Text textAlign="center" fontSize="xl">
        Story element text 2
      </Text>
      <CovidCardSet></CovidCardSet>
      <Text textAlign="center" fontSize="xl">
        Story element text 3
      </Text>
    </>
  );
};

export default VersionB;
