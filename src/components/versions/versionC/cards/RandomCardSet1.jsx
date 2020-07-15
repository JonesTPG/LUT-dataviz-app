import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Box, Flex } from '@chakra-ui/core';

import Random1Introduction from './Random1Introduction';
import HUSCard from './HUSCard';

const RandomCardSet1 = ({ cardset }) => {
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
          {/* {husCovidCards
            .sort((a, b) => a.order - b.order)
            .map((husCard) => (
              <HUSCard key={husCard.id} data={husCard}></HUSCard>
            ))} */}
        </Flex>
      </Box>
    </>
  );
};

export default RandomCardSet1;
