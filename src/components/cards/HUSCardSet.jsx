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
        order
        image {
          url
        }
        timespan_image {
          url
        }
        map {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_HUS_CARDS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;
  console.log(data);
  const husCovidCards = [...data.husCovidCards];

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
          <HUSIntroduction></HUSIntroduction>
          {husCovidCards
            .sort((a, b) => a.order - b.order)
            .map((husCard) => (
              <HUSCard key={husCard.id} data={husCard}></HUSCard>
            ))}
        </Flex>
      </Box>
    </>
  );
};

export default HUSCardSet;
