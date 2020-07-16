import React, { useState } from 'react';

import { Box, Button, Text } from '@chakra-ui/core';
import { gql, useQuery } from '@apollo/client';

import CardQuestion from './CardQuestion';
import { useStickyState } from '../../hooks/common';
import { generateRandomQuestionOrder } from '../../utils/randomize';

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

  const [questionOrder, setQuestionOrder] = useStickyState(
    generateRandomQuestionOrder(),
    'question-order'
  );
  const [questionIndex, setQuestionIndex] = useStickyState(0, 'question-index');

  const getAnswer = (identifier, value) => {
    console.log('survey question length' + surveyQuestions.length);
    console.log('question index' + questionIndex);
    sendData(identifier, value);
    if (questionIndex === surveyQuestions.length - 1) {
      console.log('all done');
      sendCardQuestionsDone(true);
    }
    setQuestionIndex(questionIndex + 1);
  };

  const { loading, error, data } = useQuery(GET_SURVEY_QUESTIONS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;

  //TODO: randomize question array. save the randomization sequence
  //so that refresh wont reset the order
  const surveyQuestions = [...data.questions];

  if (surveyQuestions.length === 0) {
    console.log('error occurred');
    return;
  }

  const currentQuestion = surveyQuestions[questionOrder[questionIndex]];
  console.log(currentQuestion);

  return (
    <>
      <CardQuestion data={currentQuestion} sendValue={getAnswer}></CardQuestion>
    </>
  );
};

export default SurveySlider;
