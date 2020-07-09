import React from 'react';
import { Image, Text, Box, Radio, RadioGroup } from '@chakra-ui/core';

import { useApiUrl } from '../../hooks/common';

const CardQuestion = ({ data }) => {
  const [value, setValue] = React.useState('1');
  const API_URL = useApiUrl();

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
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          <Radio value="1">Yes</Radio>
          <Radio value="2">No</Radio>
        </RadioGroup>
      </Box>
    </>
  );
};

export default CardQuestion;
