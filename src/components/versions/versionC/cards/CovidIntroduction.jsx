import React from 'react';
import { Box, Text } from '@chakra-ui/core';

const CovidIntroduction = () => {
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
          Covid Card Collection Introduction
        </Text>
        <Text mt={5}>
          This is cardset about Covid situation in different regions of Finland.
        </Text>
      </Box>
    </>
  );
};

export default CovidIntroduction;
