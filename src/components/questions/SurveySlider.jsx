import React from 'react';

import { gql, useQuery } from '@apollo/client';

import CardQuestion from './CardQuestion';
import { useStickyState } from '../../hooks/common';

const SurveySlider = () => {
  const GET_SURVEY_QUESTIONS = gql`
    query questions {
      questions {
        id
        text
        order
        image {
          url
        }
      }
    }
  `;

  let surveyData = {};

  const [question, setQuestion] = useStickyState(1, 'question');

  const getAnswer = (value) => () => {
    console.log(value);
    surveyData.question1 = value;
    setQuestion(2);
  };

  const { loading, error, data } = useQuery(GET_SURVEY_QUESTIONS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;
  const surveyQuestions = [...data.questions];

  if (surveyQuestions.length === 0) {
    console.log('error occurred');
    return;
  }

  const currentQuestion = surveyQuestions.find((q) => q.order === question);

  return (
    <>
      <CardQuestion data={currentQuestion} sendValue={getAnswer}></CardQuestion>
    </>
  );
};

export default SurveySlider;
