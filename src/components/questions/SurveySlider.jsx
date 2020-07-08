import React from 'react';
import { gql, useQuery } from '@apollo/client';

import CardQuestion from './CardQuestion';

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

  const { loading, error, data } = useQuery(GET_SURVEY_QUESTIONS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;
  const surveyQuestions = [...data.questions];
  console.log(surveyQuestions);

  return (
    <>
      {surveyQuestions.map((surveyQuestion) => (
        <CardQuestion
          key={surveyQuestion.id}
          data={surveyQuestion}
        ></CardQuestion>
      ))}
    </>
  );
};

export default SurveySlider;
