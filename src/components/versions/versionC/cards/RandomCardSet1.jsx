import React from 'react';
import { Box, Flex } from '@chakra-ui/core';

import Random1Introduction from './Random1Introduction';
import CovidCard from './CovidCard';
import HUSCard from './HUSCard';

const RandomCardSet1 = ({ cardSet }) => {
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
          <Random1Introduction></Random1Introduction>
          {cardSet.map((card) =>
            card.__typename == 'HusCovidCard' ? (
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

export default RandomCardSet1;
