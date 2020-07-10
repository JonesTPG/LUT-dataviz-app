import React from 'react';
import { Flex, Progress } from '@chakra-ui/core';

const Navbar = ({ progress }) => {
  return (
    <>
      <Flex
        bg="gray.300"
        align="center"
        color="black"
        justify="center"
        fontSize={['md', 'lg', 'xl', 'xl']}
        h="7vh"
        minH="50px"
        boxShadow="md"
        p={2}
      ></Flex>
      <Progress value={progress} />
    </>
  );
};

export default Navbar;
