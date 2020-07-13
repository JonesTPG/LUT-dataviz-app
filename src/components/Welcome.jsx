import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

const Welcome = ({ show, setPage, setProgress }) => {
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
