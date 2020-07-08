import React from 'react';

import { useApiUrl } from '../../hooks/common';

const CardQuestion = ({ data }) => {
  const API_URL = useApiUrl();

  let { text, order, image } = data;

  //TODO: add better UI with chakra components
  return (
    <>
      <p>{text}</p>
      <p>{order}</p>
      <p>{image.url}</p>
    </>
  );
};

export default CardQuestion;
