import React from 'react';
import { Box, Text } from '@chakra-ui/core';

const Random2Introduction = () => {
  return (
    <>
      <Box
        w={['80%', '80%', '40%', '26%']}
        mb={5}
        borderWidth="1px"
        rounded="20px"
        boxShadow="sm"
        bg="gray.200"
      >
        <Text mt={5} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Covid-19 Cardset
        </Text>
        <Text mt={5}>This is Covid-19 Cardset B.</Text>
      </Box>
    </>
  );
};

export default Random2Introduction;
