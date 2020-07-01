import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

const Welcome = ({ show, setPage }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Welcome to the application!</Text>
      </Flex>

      <Box textAlign="center">
        <Button onClick={() => setPage('assignment')}>
          Proceed to assignment
        </Button>
      </Box>
    </>
  );
};

export default Welcome;
