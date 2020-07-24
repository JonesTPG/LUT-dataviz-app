import React from 'react';

import HUSCard from './HUSCard';
import CovidCard from './CovidCard';

import { Box, Flex } from '@chakra-ui/core';
import Random2Introduction from './Random2Introduction';

const RandomCardSet2 = ({ cardSet }) => {
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
          {cardSet.map((card) =>
            card.__typename === 'HusCovidCard' ? (
              <HUSCard key={card.id} data={card}></HUSCard>
            ) : (
              <CovidCard key={card.id} data={card}></CovidCard>
            )
          )}
        </Flex>
      </Box>
    </>
  );
};

export default RandomCardSet2;
