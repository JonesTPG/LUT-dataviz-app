import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Box, Text, Flex } from '@chakra-ui/core';

import CardInfo from './CardInfo';

const CovidCards = () => {
  const GET_COVID_CARDS = gql`
    query {
      covidCards {
        id
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

  const { loading, error, data } = useQuery(GET_COVID_CARDS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;

  return (
    <>
      <Flex w="100vw" justify="center" p={10} direction="row">
        <Text fontSize="4xl">Browse all the available cards here</Text>
      </Flex>

      <Box className="test" textAlign="center">
        {data.covidCards.map((covidCard) => (
          <CardInfo key={covidCard.region} data={covidCard}></CardInfo>
        ))}
      </Box>
    </>
  );
};

export default CovidCards;
