import React from 'react';

import RecognitionQuestion from './RecognitionQuestion';

const question = 'hows it going?';

const RecallQuestionSet = () => {
  return (
    <>
      <RecognitionQuestion question={question}></RecognitionQuestion>
    </>
  );
};

export default RecallQuestionSet;
