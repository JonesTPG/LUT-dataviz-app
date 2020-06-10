import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Front page of card app</Text>
      </Flex>
      <Link to={'/cards'}>
        <Box textAlign="center">
          <Button>Show cards</Button>
          <Button>Show collections</Button>
        </Box>
      </Link>
    </>
  );
};

export default Home;
