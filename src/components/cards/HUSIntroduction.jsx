import React from 'react';
import { Box, Text } from '@chakra-ui/core';

const HUSIntroduction = () => {
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
          Helsinki Uusimaa region of Finland Card Collection Introduction
        </Text>
        <Text mt={5}>
          This is cardset about Covid situation in Helsinki Uusimaa region of
          Finland.
        </Text>
      </Box>
    </>
  );
};

export default HUSIntroduction;
