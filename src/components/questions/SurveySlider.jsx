import React from 'react';
import { gql, useQuery } from '@apollo/client';

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
      <p>slider</p>
    </>
  );
};

export default SurveySlider;
