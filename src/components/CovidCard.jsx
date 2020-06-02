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

import { gql, useQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';

import { useApiUrl } from '../hooks/common';

const CovidCard = (props) => {
  const { id } = useParams();
  const API_URL = useApiUrl();

  const GET_COVID_CARD = gql`
    query covidCard($id: ID!) {
      covidCard(id: $id) {
        region
        date_of_first_case
        total_cases
        deaths
        over_65
        population_density
        title
        description
        images {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_COVID_CARD, {
    variables: { id: id }
  });

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;

  let {
    title,
    date_of_first_case,
    deaths,
    description,
    images,
    over_65,
    population_density,
    region,
    total_cases
  } = data.covidCard;
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
            <Image mt={3} rounded="md" src={API_URL + images[0].url} />

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
