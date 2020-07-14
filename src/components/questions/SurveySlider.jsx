import React from 'react';

import { gql, useQuery } from '@apollo/client';

import CardQuestion from './CardQuestion';
import { useStickyState } from '../../hooks/common';

const SurveySlider = ({ sendData }) => {
  const GET_SURVEY_QUESTIONS = gql`
    query questions {
      questions {
        id
        text
        order
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

  const getAnswer = (value) => {
    if (questionNumber === surveyQuestions.length) {
      console.log('all done');
      sendData(questionNumber, value);
      //TODO: survey is done, send data to strapi and redirect user to thankyou page
    } else {
      sendData(questionNumber, value);
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
    (q) => q.order === questionNumber
  );

  return (
    <>
      <CardQuestion data={currentQuestion} sendValue={getAnswer}></CardQuestion>
    </>
  );
};

export default SurveySlider;
