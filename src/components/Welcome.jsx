import React, { useEffect } from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import { getState } from '../utils/localStorage';

const Welcome = () => {
  let defaultState = {
    hasDoneAssignment: false,
    hasVisitedSurvey: false,
    hasSentSurvey: false
  };

  useEffect(() => {
    let applicationState;
    getState() === null
      ? (applicationState = defaultState)
      : (applicationState = getState());
    console.log('on refresh');
    console.log('current state:');
    console.log(applicationState);
  });

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Welcome to the application!</Text>
      </Flex>
      <Link to={'/assignment'}>
        <Box textAlign="center">
          <Button>Proceed to assignment</Button>
        </Box>
      </Link>
    </>
  );
};

export default Welcome;
