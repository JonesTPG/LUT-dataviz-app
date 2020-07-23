import React from 'react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Divider,
  Text,
  Button
} from '@chakra-ui/core';

const ThankYou = ({ show, AMTCode }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <Box textAlign="center">
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon size="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Thank you for participating, you completed the assignment and survey
            successfully!
          </AlertTitle>
          <AlertDescription maxWidth="sm"></AlertDescription>
        </Alert>

        <Text mt={10}>
          Here is your code that you can redeem at Amazon Mechanical Turk:
        </Text>
        <Text mt={10} fontSize="4xl">
          {AMTCode}
        </Text>
        <Text mt={10}>
          Remember, the code can only be used once so make sure to input it
          correctly.
        </Text>
      </Box>
      <Box mt={10} textAlign="center">
        <a href="https://www.mturk.com/" target="_blank">
          <Button>Exit application and go to AMT</Button>
        </a>
      </Box>
    </>
  );
};

export default ThankYou;
