import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CovidCard from './CovidCard';

import { Box, Flex } from '@chakra-ui/core';
import CovidIntroduction from './CovidIntroduction';

const CovidCardSet = () => {
  const GET_COVID_CARDS = gql`
    query covidCards {
      covidCards {
        id
        name
        description
        region
        timespan
        date_of_first_case
        over_65
        cases
        population_density
        chart {
          url
        }
        timespan_image {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_COVID_CARDS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;
  console.log(data);

  return (
    <>
      <Box textAlign="center">
        <Flex wrap="wrap" p={[3, 5, 10, 10]} justifyContent="space-between">
          <CovidIntroduction></CovidIntroduction>
          {data.covidCards.map((covidCard) => (
            <CovidCard key={covidCard.id} data={covidCard}></CovidCard>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default CovidCardSet;
