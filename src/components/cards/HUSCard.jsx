import React from 'react';
import { Box, Image, Text, Stat, StatLabel, StatNumber } from '@chakra-ui/core';

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
    timespan_image
  } = data;

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
          {name}
        </Text>
        <Text mt={5}>{description}</Text>

        <Image w="100%" mt={3} rounded="md" src={API_URL + image.url} />

        <Stat>
          <StatLabel>Region</StatLabel>
          <StatNumber>{region}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Timespan</StatLabel>
          <StatNumber>{timespan}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Cases</StatLabel>
          <StatNumber>{cases}</StatNumber>
        </Stat>

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
