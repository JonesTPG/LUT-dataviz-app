import React from 'react';

import { Box, Flex, Text, Button } from '@chakra-ui/core';

const ThankYou = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">
          Thank you for participating. You can now close this window and go back
          to AMT.
        </Text>
      </Flex>

      <Box textAlign="center">
        <a href="https://www.mturk.com/">
          <Button>Exit application and go to AMT</Button>
        </a>
      </Box>
    </>
  );
};

export default ThankYou;
