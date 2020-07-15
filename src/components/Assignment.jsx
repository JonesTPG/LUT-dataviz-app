import React, { useState } from 'react';
import { Box, Flex, Text, Textarea, Button, useToast } from '@chakra-ui/core';

import VersionA from './versions/versionA/VersionA';
import VersionB from './versions/versionB/VersionB';
import VersionC from './versions/versionC/VersionC';

const Assignment = ({
  applicationVersion,
  show,
  setPage,
  setStickyAnswer,
  setProgress
}) => {
  const [answer, setAnswer] = useState('');
  const toast = useToast();

  if (!show) {
    return null;
  }

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setAnswer(inputValue);
  };

  let handleSubmit = () => {
    if (answer.length < 50) {
      toast({
        title: 'An error occurred.',
        description: 'Please answer the question with at least 50 characters.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
      return;
    }

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

      {applicationVersion === 1 ? (
        <VersionA></VersionA>
      ) : applicationVersion === 2 ? (
        <VersionB></VersionB>
      ) : (
        <VersionC></VersionC>
      )}

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
