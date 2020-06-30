import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

const Survey = ({ show, setPage }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Thank you! Fill out the following survey.</Text>
      </Flex>

      <Box textAlign="center">
        <Button>Link to webropol</Button>
      </Box>
    </>
  );
};

export default Survey;
