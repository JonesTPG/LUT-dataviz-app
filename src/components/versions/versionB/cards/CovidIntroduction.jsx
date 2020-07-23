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
          Different regions of Finland saw varying levels of infection of
          Covid-19. These could be explained by regional differences, such as
          population density.
        </Text>
      </Box>
    </>
  );
};

export default CovidIntroduction;
