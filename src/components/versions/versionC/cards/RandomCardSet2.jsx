import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CovidCard from './CovidCard';

import { Box, Flex } from '@chakra-ui/core';
import Random2Introduction from './Random2Introduction';

const RandomCardSet2 = ({ cardset }) => {
  return (
    <>
      <Box textAlign="center">
        <Flex
          wrap="wrap"
          p={[3, 5, 10, 10]}
          justifyContent={[
            'center',
            'center',
            'space-between',
            'space-between'
          ]}
        >
          <Random2Introduction></Random2Introduction>
          {/* {covidCards
            .sort((a, b) => a.cases - b.cases)
            .map((covidCard) => (
              <CovidCard key={covidCard.id} data={covidCard}></CovidCard>
            ))} */}
        </Flex>
      </Box>
    </>
  );
};

export default RandomCardSet2;
