import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Box, Flex } from '@chakra-ui/core';

import HUSIntroduction from './HUSIntroduction';
import HUSCard from './HUSCard';

const HUSCardSet = () => {
  const GET_HUS_CARDS = gql`
    query husCovidCards {
      husCovidCards {
        id
        name
        description
        timespan
        region
        cases
        image {
          url
        }
        timespan_image {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_HUS_CARDS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;
  console.log(data);

  return (
    <>
      <Box textAlign="center">
        <Flex wrap="wrap" p={[3, 5, 10, 10]} justifyContent="space-between">
          <HUSIntroduction></HUSIntroduction>
          {data.husCovidCards.map((husCard) => (
            <HUSCard key={husCard.id} data={husCard}></HUSCard>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default HUSCardSet;
