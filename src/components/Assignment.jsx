import React, { useState } from 'react';
import { Box, Flex, Text, Textarea, Button } from '@chakra-ui/core';

import CovidCardSet from './cards/CovidCardSet';
import HUSCardSet from './cards/HUSCardSet';

const Assignment = ({ show, setPage, setStickyAnswer, setProgress }) => {
  /* TODO:
      - add logic that determines the application version for the user
      - store the application version in local storage so that it doesn't change on browser refresh
  */

  const [answer, setAnswer] = useState('');

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
    setProgress(66);
  };

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">
          Check out the cards and complete the following assignment
        </Text>
      </Flex>

      {/* Different assignment version rendering here  */}

      {/* TODO: 
          - wrap HUSCardSet and CovidCardSet in a component (maybe versionA component?)
          - make conditional rendering logic based on the application version that has been determined to the user
      */}

      <HUSCardSet></HUSCardSet>
      <CovidCardSet></CovidCardSet>

      {/* Different assignment version rendering here  */}

      <Flex justify="center" direction="row">
        <Text fontSize="xl">
          In your opinion, how will the Covid-19 situation look like in the
          future in Finland?
        </Text>
      </Flex>

      <Flex justify="center" mt={10} ml={100} mr={100} direction="row">
        <Textarea
          value={answer}
          onChange={handleInputChange}
          placeholder="Type your answer..."
        />
      </Flex>
      <Box textAlign="center" mb={50}>
        <Button onClick={handleSubmit} mt={15}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Assignment;
