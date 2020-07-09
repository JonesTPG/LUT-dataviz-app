import React from 'react';
import { Box, Text, Button } from '@chakra-ui/core';

import SurveySlider from './questions/SurveySlider';

const Survey = ({ show, setPage, setProgress }) => {
  if (!show) {
    return null;
  }
  let handleClick = () => {
    setPage('thankyou');
    setProgress(100);
  };
  return (
    <>
      <Box mt={10} textAlign="center">
        <Text fontSize="4xl">Now fill out the following survey.</Text>
        <Text>
          Note that once you save and proceed with your answer, you won't be
          able to come back to edit your answer.
        </Text>
      </Box>

      <SurveySlider></SurveySlider>

      <Box textAlign="center" mb={50}>
        <Button onClick={handleClick}>Save answer and proceed</Button>
      </Box>
    </>
  );
};

export default Survey;
