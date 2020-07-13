import React from 'react';

import { gql, useQuery } from '@apollo/client';

import CardQuestion from './CardQuestion';
import { useStickyState } from '../../hooks/common';

/* TODO:
  - finish up the demographics question component and make it appear FIRST on the survey slider
  - make some more questions to CMS and finish the logic that changes the questions
  - make a logic that sends the surveydata to Survey.jsx when the user has answered all the questions
*/

const SurveySlider = ({ sendData }) => {
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

  const [questionNumber, setQuestionNumber] = useStickyState(
    1,
    'question-number'
  );

  const getAnswer = (value) => () => {
    let answerData = {};
    answerData['question' + questionNumber] = value;
    console.log(answerData);

    sendData(answerData);
    questionNumber === surveyQuestions.length
      ? console.log('all done')
      : setQuestionNumber(questionNumber + 1);
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
