import React from 'react';

import RecognitionQuestion from './RecognitionQuestion';

const question = 'hows it going?';

const RecognitionQuestionSet = () => {
  return (
    <>
      <RecognitionQuestion question={question}></RecognitionQuestion>
    </>
  );
};

export default RecognitionQuestionSet;
