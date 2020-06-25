import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

import { Link } from 'react-router-dom';

const Welcome = () => {
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
      <Link to={'/cards'}>
        <Box textAlign="center">
          <Button>Show cards</Button>
        </Box>
      </Link>
    </>
  );
};

export default Welcome;
