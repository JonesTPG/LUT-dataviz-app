import React from 'react';
import { Box, Text, Button } from '@chakra-ui/core';

import { useStickyState } from '../hooks/common';

import SurveySlider from './questions/SurveySlider';
import DemoGraphicInfo from './questions/DemoGraphicInfo';

const Survey = ({ show, setPage, setProgress }) => {
  const [demoGraphicInfo, setDemoGraphicInfo] = useStickyState(
    null,
    'demographics'
  );

  const [surveyData, setSurveyData] = useStickyState([], 'survey-data');

  if (!show) {
    return null;
  }

  let handleSendClick = () => {
    // TODO: send data to Strapi API
    setPage('thankyou');
    setProgress(100);
  };

  let getDemoGraphics = (data) => () => {
    setDemoGraphicInfo(data);
  };

  let getSurveyAnswer = (questionNumber, value) => {
    setSurveyData([...surveyData, { questionNumber, value }]);
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
      <Box
        m={[2, 10, 30, 50]}
        p={[2, 2, 30, 30]}
        textAlign="center"
        borderColor="blue.500"
        borderWidth={10}
      >
        {demoGraphicInfo == null ? (
          <DemoGraphicInfo sendData={getDemoGraphics}></DemoGraphicInfo>
        ) : (
          <SurveySlider sendData={getSurveyAnswer}></SurveySlider>
        )}
      </Box>

      {/* TODO: When user has done the survey, show a button that sends the data to backend and directs user to the thankyou page. */}
      {/* <Box textAlign="center" mb={50}>
        <Button onClick={handleClick}>Send survey and proceed</Button>
      </Box> */}
    </>
  );
};

export default Survey;
