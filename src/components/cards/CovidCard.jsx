import React from 'react';
import { Box, Image, Text, Stat, StatLabel, StatNumber } from '@chakra-ui/core';

import { useApiUrl } from '../../hooks/common';

const CovidCard = ({ data }) => {
  const API_URL = useApiUrl();

  let {
    date_of_first_case,
    name,
    description,
    chart,
    timespan_image,
    over_65,
    population_density,
    region,
    cases
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
        <Image w="100%" mt={3} rounded="md" src={API_URL + chart.url} />

        <Stat>
          <StatLabel>Total cases</StatLabel>
          <StatNumber>{cases}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Date of first case</StatLabel>
          <StatNumber>{date_of_first_case}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Population density</StatLabel>
          <StatNumber>{population_density}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>% &gt; 65 years old</StatLabel>
          <StatNumber>{over_65}</StatNumber>
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

export default CovidCard;
