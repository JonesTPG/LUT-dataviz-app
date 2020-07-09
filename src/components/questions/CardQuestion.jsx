import React from 'react';
import { Flex, Image, Text, Box } from '@chakra-ui/core';

import { useApiUrl } from '../../hooks/common';

const CardQuestion = ({ data }) => {
  const API_URL = useApiUrl();

  let { text, order, image } = data;

  //TODO: add better UI with chakra components
  return (
    <>
      <Box
        m={50}
        p={50}
        textAlign="center"
        borderColor="blue.500"
        borderWidth={10}
      >
        <Flex justifyContent="space-evenly">
          <Image
            w={['100%', '80%', '40%', '40%']}
            rounded="md"
            src={API_URL + image.url}
          />
          <Text mt={1} fontSize={['l', 'l', 'xl', 'xl']}>
            {text}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default CardQuestion;
