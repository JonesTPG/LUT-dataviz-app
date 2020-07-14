import React, { useState } from 'react';

import { Box, Text } from '@chakra-ui/core';
import { gql, useMutation } from '@apollo/client';

import { useStickyState } from '../hooks/common';

import SurveySlider from './questions/SurveySlider';
import DemoGraphicInfo from './questions/DemoGraphicInfo';

const Survey = ({ show, setPage, setProgress, answer, applicationVersion }) => {
  // TODO: add variables
  const SEND_USER_DATA = gql`
    mutation {
      createAnswer(
        input: {
          data: {
            age: "10-20"
            assignment_answer: "it will get better"
            question_1: "yes"
            question_2: "no"
          }
        }
      ) {
        answer {
          age
          assignment_answer
          question_1
          question_2
        }
      }
    }
  `;

  // TODO: add useMutation hook

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

  let getDemoGraphics = (data) => () => {
    setDemoGraphicInfo(data);
    sendDataToStrapi();
  };

  let getSurveyAnswer = (questionNumber, value) => {
    setSurveyData([...surveyData, { questionNumber, value }]);
  };

  let sendDataToStrapi = () => {
    console.log('sending data...');
    //TODO: validate data in some level

    //TODO: gather all the data into a GraphQL mutation and send the mutation.

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
