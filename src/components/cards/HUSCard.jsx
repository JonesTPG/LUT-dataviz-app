import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/core';

import { useApiUrl } from '../../hooks/common';

const HUSCard = ({ data }) => {
  const API_URL = useApiUrl();

  let {
    name,
    description,
    timespan,
    region,
    cases,
    image,
    timespan_image,
    map
  } = data;

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
          {name}
        </Text>
        <Text mt={5}>{description}</Text>

        <Image w="100%" mt={3} rounded="md" src={API_URL + image.url} />

        <Flex justifyContent="space-evenly">
          <Box mt={8}>
            <Stat>
              <StatLabel>Timespan</StatLabel>
              <StatNumber>{timespan}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>New cases</StatLabel>
              <StatNumber>{cases}</StatNumber>
            </Stat>
          </Box>
          <Box>
            <Image mt={8} h={120} rounded="md" src={API_URL + map.url} />
          </Box>
        </Flex>

        <Image
          w="100%"
          mt={3}
          rounded="md"
          src={API_URL + timespan_image.url}
        />
      </Box>
    </>
  );
};

export default HUSCard;
