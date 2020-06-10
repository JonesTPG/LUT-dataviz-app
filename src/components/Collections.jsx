import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Box, Text, Flex } from '@chakra-ui/core';

import CollectionInfo from './CollectionInfo';

const Collections = () => {
  const GET_DATACARD_COLLECTIONS = gql`
    query {
      dataCardCollections {
        name
        description
        id
        data_cards {
          name
          description
          custom_stat_1
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATACARD_COLLECTIONS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Browse all the available collections here</Text>
      </Flex>

      <Box className="test" textAlign="center">
        {data.dataCardCollections.map((dataCardCollection) => (
          <CollectionInfo
            key={dataCardCollection.id}
            data={dataCardCollection}
          ></CollectionInfo>
        ))}
      </Box>
    </>
  );
};

export default Collections;
