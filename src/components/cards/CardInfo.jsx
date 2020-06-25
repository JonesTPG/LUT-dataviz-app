import React from 'react';

import { Box, Button, Text } from '@chakra-ui/core';

import { Link } from 'react-router-dom';

const CardInfo = ({ data }) => {
  const { description, title, id } = data;

  return (
    <>
      <Box
        margin="0 auto"
        w={['80%', '60%', '40%', '40%']}
        borderWidth="1px"
        rounded="lg"
      >
        <Text fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
        <Text>{description}</Text>
        <Link to={'/cards/' + id}>
          <Button>Show card</Button>
        </Link>
      </Box>
    </>
  );
};

export default CardInfo;
