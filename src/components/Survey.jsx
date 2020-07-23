import React from 'react';

import { Box, Text } from '@chakra-ui/core';
import { gql, useMutation } from '@apollo/client';

import { buildJsonFromData } from '../utils/jsonBuilder';
import { useStickyState } from '../hooks/common';

import SurveySlider from './questions/SurveySlider';
import DemoGraphicInfo from './questions/DemoGraphicInfo';

const Survey = ({ show, setPage, setProgress, answer, applicationVersion }) => {
  const SEND_USER_DATA = gql`
    mutation sendData($data: JSON!) {
      createAnswer(input: { data: { data: $data } }) {
        answer {
          data
        }
      }
    }
  `;

  const [sendData, { data, loading, error }] = useMutation(SEND_USER_DATA);

  const [cardQuestionsDone, setCardQuestionsDone] = useStickyState(
    false,
    'card-questions-done'
  );

  const [demoGraphicInfo, setDemoGraphicInfo] = useStickyState(
    {},
    'demographics'
  );
  const [surveyData, setSurveyData] = useStickyState([], 'survey-data');

  if (!show) {
    return null;
  }

  // The local storage update seems to be synchronous, so we have to send the data to the sendDataToStrapi-function
  let getDemoGraphics = (data) => {
    setDemoGraphicInfo(data);
    sendDataToStrapi(data);
  };

  let getSurveyAnswer = (identifier, value) => {
    setSurveyData([...surveyData, { identifier, value }]);
  };

  let sendDataToStrapi = (demoGraphicInfo) => {
    const jsonObject = buildJsonFromData(
      applicationVersion,
      answer,
      demoGraphicInfo,
      surveyData
    );

    console.log('data object to be sent to strapi:' + jsonObject);
    sendData({ variables: { data: jsonObject } });

    console.log('data sent');
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
      <Box
        m={[2, 10, 30, 50]}
        p={[2, 2, 30, 30]}
        textAlign="center"
        borderColor="blue.500"
        borderWidth={10}
      >
        {cardQuestionsDone ? (
          <DemoGraphicInfo sendData={getDemoGraphics}></DemoGraphicInfo>
        ) : (
          <SurveySlider
            sendData={getSurveyAnswer}
            sendCardQuestionsDone={setCardQuestionsDone}
          ></SurveySlider>
        )}
      </Box>
    </>
  );
};

export default Survey;
