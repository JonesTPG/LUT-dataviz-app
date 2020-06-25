import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

import { Link } from 'react-router-dom';

const Survey = () => {
  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Thank you! Fill out the following survey.</Text>
      </Flex>
      <Link to={'#'}>
        <Box textAlign="center">
          <Button>Link to webropol</Button>
        </Box>
      </Link>
    </>
  );
};

export default Survey;
