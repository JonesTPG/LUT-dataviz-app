import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CovidCard from './CovidCard';

import { Box } from '@chakra-ui/core';

const GeneralCardSet = () => {
  const GET_COVID_CARDS = gql`
    query covidCards {
      covidCards {
        id
        region
        timespan
        date_of_first_case
        over_65
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
        {data.covidCards.map((covidCard) => (
          <CovidCard key={covidCard.region} data={covidCard}></CovidCard>
        ))}
      </Box>
    </>
  );
};

export default GeneralCardSet;
