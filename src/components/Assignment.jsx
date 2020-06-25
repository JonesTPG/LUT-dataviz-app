import React, { useState } from 'react';
import { Box, Flex, Text, Textarea, Button } from '@chakra-ui/core';

const Assignment = () => {
  let [value, setValue] = React.useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Flex justify="center" p={10} direction="row">
        <Text fontSize="4xl">Complete the following assignment</Text>
      </Flex>

      <Flex justify="center" mb={10} direction="row">
        <p>Placeholder for cards</p>
      </Flex>

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
        <Button mt={15}>Submit</Button>
      </Box>
    </>
  );
};

export default Assignment;
