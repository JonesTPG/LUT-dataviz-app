import React from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/core';

const CovidCard = () => {
  console.log(data);
  return (
    <>
      <Flex
        justifyContent="center"
        direction={['column', 'column', 'column', 'row']}
      >
        <Box
          w="400px"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          alignItems="center"
        >
          <Flex direction="column">
            <Text mt={5} fontSize="xl" fontWeight="semibold" lineHeight="short">
              {region}
            </Text>
            <Image mt={3} rounded="md" src={baseUrl + images[0].url} />

            <Stat>
              <StatLabel>Total cases</StatLabel>
              <StatNumber>{total_cases}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Deaths</StatLabel>
              <StatNumber>{deaths}</StatNumber>
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
              <StatLabel>% > 65 years old</StatLabel>
              <StatNumber>{(over_65 * 100).toPrecision(4)}</StatNumber>
            </Stat>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default CovidCard;
