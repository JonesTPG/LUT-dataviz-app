import React from 'react';
import {
  Box,
  Image,
  Button,
  Text,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  Skeleton
} from '@chakra-ui/core';

import { useApiUrl } from '../../hooks/common';

const CovidCard = ({ data }) => {
  const API_URL = useApiUrl();

  let {
    title,
    date_of_first_case,
    chart,
    over_65,
    population_density,
    region,
    total_cases
  } = data;

  return (
    <>
      <Box
        w={['90%', '70%', '60%', '30%']}
        borderWidth="1px"
        rounded="20px"
        boxShadow="sm"
        bg="gray.200"
        m="0 auto"
        mt="10vh"
      >
        <Text
          textAlign="center"
          mt={5}
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="short"
        >
          {region}
        </Text>
        <Image w="100%" mt={3} rounded="md" src={API_URL + chart.url} />

        <Stat textAlign="center">
          <StatLabel>Total cases</StatLabel>
          <StatNumber>{total_cases}</StatNumber>
        </Stat>

        <Stat textAlign="center">
          <StatLabel>Date of first case</StatLabel>
          <StatNumber>{date_of_first_case}</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>Population density</StatLabel>
          <StatNumber>{population_density}</StatNumber>
        </Stat>
        <Stat textAlign="center" t>
          <StatLabel>% > 65 years old</StatLabel>
          <StatNumber>{(over_65 * 100).toPrecision(4)}</StatNumber>
        </Stat>
      </Box>
    </>
  );
};

export default CovidCard;
