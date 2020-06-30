import React, { useState } from 'react';
import { Box, Flex, Text, Textarea, Button } from '@chakra-ui/core';

import GeneralCardSet from './cards/GeneralCardSet';

import { useStickyState } from '../hooks/common';

const Assignment = ({ show, setPage }) => {
  const [answer, setAnswer] = useState('');
  const [stickyAnswer, setStickyAnswer] = useStickyState(
    '',
    'assignment-answer'
  );
  if (!show) {
    return null;
  }

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setAnswer(inputValue);
    console.log(answer);
  };

  let handleSubmit = () => {
    console.log('submit');

    console.log(answer);
    if (answer.length < 2) {
      // TODO: show info to user that answer is too short
      return;
    }
    /* update state and redirect user to survey page */
    setPage('survey');
    setStickyAnswer(answer);
  };

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Complete the following assignment</Text>
      </Flex>

      <GeneralCardSet></GeneralCardSet>

      <Flex justify="center" direction="row">
        <Text fontSize="xl">
          In your opinion, how will the covid situation look like in the future?
        </Text>
      </Flex>

      <Flex justify="center" mt={10} ml={100} mr={100} direction="row">
        <Textarea
          value={answer}
          onChange={handleInputChange}
          placeholder="Type your answer..."
        />
      </Flex>
      <Box textAlign="center">
        <Button onClick={handleSubmit} mt={15}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Assignment;
