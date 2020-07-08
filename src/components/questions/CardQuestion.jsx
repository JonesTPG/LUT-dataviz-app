import React from 'react';

import { useApiUrl } from '../../hooks/common';

const CardQuestion = ({ data }) => {
  const API_URL = useApiUrl();

  let { text, order, image } = data;

  return (
    <>
      <p>{text}</p>
      <p>{order}</p>
      <p>{image.url}</p>
    </>
  );
};

export default CardQuestion;
