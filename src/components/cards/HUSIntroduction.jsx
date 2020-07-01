import React from 'react';
import { Box, Text } from '@chakra-ui/core';

const HUSIntroduction = () => {
  return (
    <>
      <Box
        w={['100%', '100%', '48%', '32%']}
        mb={5}
        borderWidth="1px"
        rounded="20px"
        boxShadow="sm"
        bg="gray.200"
      >
        <Text mt={5} fontSize="xl" fontWeight="semibold" lineHeight="short">
          HUS Card Collection Introduction
        </Text>
        <Text mt={5}>This is cardset about Covid situation in HUS.</Text>
      </Box>
    </>
  );
};

export default HUSIntroduction;
