import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Box, Text, Flex } from '@chakra-ui/core';

import CardInfo from './CardInfo';

const DataCards = () => {
  const GET_DATA_CARDS = gql`
    query {
      dataCards {
        id
        name
        description
        custom_stat_1
        custom_stat_2
        custom_stat_3
        custom_stat_4
        custom_stat_5
        custom_stat_6
        images {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA_CARDS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Browse all the available cards here</Text>
      </Flex>

      <Box className="test" textAlign="center">
        {data.dataCards.map((dataCard) => (
          <CardInfo key={dataCard.id} data={dataCard}></CardInfo>
        ))}
      </Box>
    </>
  );
};

export default DataCards;
