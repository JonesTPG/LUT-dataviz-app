import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

const Footer = () => {
  return (
    <>
      <Flex
        bg="gray.300"
        align="center"
        color="black"
        justify="center"
        h="7vh"
        boxShadow="md"
        w="100%"
        p={2}
        mb="0"
      >
        <Text>Datacardulator 2020.</Text>
      </Flex>
    </>
  );
};

export default Footer;
