import React from 'react';

import { Box, Button, Text } from '@chakra-ui/core';

import { Link } from 'react-router-dom';

const CollectionInfo = ({ data }) => {
  const { name, description, id } = data;
  return (
    <>
      <Box
        margin="0 auto"
        w={['80%', '60%', '40%', '40%']}
        borderWidth="1px"
        rounded="lg"
      >
        <Text fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
        <Text>{description}</Text>
        <Link to={'/collections/' + id}>
          <Button>Show collection</Button>
        </Link>
      </Box>
    </>
  );
};

export default CollectionInfo;
