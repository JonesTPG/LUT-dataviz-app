import React from 'react';
import { Box, Flex, Text, Textarea, Button } from '@chakra-ui/core';

import GeneralCardSet from './cards/GeneralCardSet';

const Assignment = () => {
  let [value, setValue] = React.useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  let handleSubmit = () => {
    console.log('submit');
    /* check here if text is long enough etc... */
    console.log(value);
    /* update state and redirect user to survey page */
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
          value={value}
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
