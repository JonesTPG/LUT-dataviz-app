import React, { useState } from 'react';

import { Box, Button, Text } from '@chakra-ui/core';
import { gql, useQuery } from '@apollo/client';

import CardQuestion from './CardQuestion';
import { useStickyState } from '../../hooks/common';

const SurveySlider = ({ sendData, sendCardQuestionsDone }) => {
  const GET_SURVEY_QUESTIONS = gql`
    query questions {
      questions {
        id
        text
        identifier
        type
        image {
          url
        }
      }
    }
  `;

  const [questionNumber, setQuestionNumber] = useStickyState(
    1,
    'question-number'
  );

  const getAnswer = (identifier, value) => {
    if (questionNumber === surveyQuestions.length) {
      console.log('all done');
      sendData(identifier, value);
      sendCardQuestionsDone(true);
    } else {
      sendData(identifier, value);
      setQuestionNumber(questionNumber + 1);
    }
  };

  const { loading, error, data } = useQuery(GET_SURVEY_QUESTIONS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;
  const surveyQuestions = [...data.questions];

  if (surveyQuestions.length === 0) {
    console.log('error occurred');
    return;
  }

  const currentQuestion = surveyQuestions.find(
    (q) => q.identifier === questionNumber
  );

  return (
    <>
      <CardQuestion data={currentQuestion} sendValue={getAnswer}></CardQuestion>
    </>
  );
};

export default SurveySlider;
