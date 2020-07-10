import React from 'react';
import { Box, Text, Button } from '@chakra-ui/core';

import SurveySlider from './questions/SurveySlider';

/* TODO:
  - make functionality that accepts the survey data from the SurveySlider.jsx
  - make functionality that sends everything needed (application version, assignment answer, survey data) to Strapi via GraphQL mutation 
*/

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

      {/* TODO: When user has done the survey, show a button that sends the data to backend and directs user to the thankyou page. */}
      {/* <Box textAlign="center" mb={50}>
        <Button onClick={handleClick}>Save answer and proceed</Button>
      </Box> */}
    </>
  );
};

export default Survey;
