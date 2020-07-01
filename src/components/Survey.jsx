import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

const Survey = ({ show, setPage, setProgress }) => {
  if (!show) {
    return null;
  }
  let handleClick = () => {
    setPage('thankyou');
    setProgress(100);
  };
  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Now fill out the following survey.</Text>
      </Flex>

      <Box textAlign="center">
        <Text>Survey placeholder</Text>
      </Box>

      <Box textAlign="center">
        <Button onClick={handleClick}>Submit survey</Button>
      </Box>
    </>
  );
};

export default Survey;
