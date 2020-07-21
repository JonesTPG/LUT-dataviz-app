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
    null,
    'demographics'
  );
  const [surveyData, setSurveyData] = useStickyState([], 'survey-data');

  if (!show) {
    return null;
  }

  let getDemoGraphics = (data) => {
    setDemoGraphicInfo(data);
    sendDataToStrapi();
  };

  let getSurveyAnswer = (identifier, value) => {
    setSurveyData([...surveyData, { identifier, value }]);
  };

  // TODO: find out why demographic info isn't working properly
  let sendDataToStrapi = () => {
    const jsonObject = buildJsonFromData(
      applicationVersion,
      answer,
      demoGraphicInfo,
      surveyData
    );

    console.log(jsonObject);
    sendData({ variables: { data: jsonObject } });
    console.log(data);

    //TODO: uncomment these and test the whole process

    // console.log('data sent');
    // setPage('thankyou');
    // setProgress(100);
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
