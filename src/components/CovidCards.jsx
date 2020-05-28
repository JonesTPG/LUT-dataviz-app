import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Flex } from '@chakra-ui/core';

import CovidCard from './CovidCard';
import ScienceCard from './ScienceCard';

const CovidCards = () => {
  const GET_COVID_CARDS = gql`
    query {
      covidCards {
        region
        date_of_first_case
        total_cases
        deaths
        over_65
        population_density
        title
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
      <Flex direction={['column', 'column', 'column', 'column']}>
        {data.covidCards.map((covidCard) => (
          <CovidCard key={covidCard.region} data={covidCard}></CovidCard>
        ))}
      </Flex>
    </>
  );
};

export default CovidCards;
