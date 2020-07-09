import React, { useState } from 'react';
import { Image, Text, Box, Button, Radio, RadioGroup } from '@chakra-ui/core';

import { useApiUrl } from '../../hooks/common';

const CardQuestion = ({ data, sendValue }) => {
  const API_URL = useApiUrl();
  const [value, setValue] = useState(0);

  let { text, order, image } = data;

  return (
    <>
      <Box
        m={[2, 10, 30, 50]}
        p={[2, 2, 30, 30]}
        textAlign="center"
        borderColor="blue.500"
        borderWidth={10}
      >
        <Text mb={10} fontSize={['l', 'l', 'xl', 'xl']}>
          {text}
        </Text>
        <Image
          w={['100%', '80%', '60%', '40%']}
          rounded="md"
          src={API_URL + image.url}
          margin="auto"
          mb={10}
        />
        <RadioGroup
          isInline
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <Radio value="1">Yes</Radio>
          <Radio value="2">No</Radio>
        </RadioGroup>
        <Box textAlign="center" mt={50} mb={50}>
          <Button onClick={sendValue(value)}>Save answer and proceed</Button>
        </Box>
      </Box>
    </>
  );
};

export default CardQuestion;
