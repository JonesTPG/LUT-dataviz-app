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

import { useApiUrl } from '../../../../hooks/common';

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
    cases,
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
        <Image w="100%" mt={3} rounded="md" src={API_URL + chart.url} />

        <Flex justifyContent="space-evenly">
          <Box mt={8}>
            <Stat>
              <StatLabel>Total cases</StatLabel>
              <StatNumber>{cases}</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Date of first case</StatLabel>
              <StatNumber>{date_of_first_case}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>
                Population per km<sup>2</sup>
              </StatLabel>
              <StatNumber>{population_density}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>% &gt; 65 years old</StatLabel>
              <StatNumber>{over_65}</StatNumber>
            </Stat>
          </Box>
          <Box>
            <Image mt={8} h={230} rounded="md" src={API_URL + map.url} />
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

export default CovidCard;
