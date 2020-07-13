import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

import { useStickyState } from '../hooks/common';
import { getRandomInt } from '../utils/randomize';

const Welcome = ({ show, setPage, setProgress }) => {
  /* TODO:
      - add logic that determines the application version for the user
      - store the application version in local storage so that it doesn't change on browser refresh
  */
  const [applicationVersion, setApplicationVersion] = useStickyState(
    getRandomInt(1, 3),
    'application-version'
  );

  if (!show) {
    return null;
  }

  let handleClick = () => {
    setPage('assignment');
    setProgress(33);
  };

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Welcome to the application!</Text>
      </Flex>

      <Box textAlign="center">
        <Button onClick={handleClick}>Proceed to assignment</Button>
      </Box>
    </>
  );
};

export default Welcome;
