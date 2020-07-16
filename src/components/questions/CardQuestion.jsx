import React, { useState } from 'react';
import {
  Image,
  Text,
  Box,
  Button,
  Radio,
  RadioGroup,
  Input,
  useToast
} from '@chakra-ui/core';

import { useApiUrl } from '../../hooks/common';

const CardQuestion = ({ data, sendValue }) => {
  const API_URL = useApiUrl();
  const toast = useToast();
  const [value, setValue] = useState('');

  let { text, identifier, type, image } = data;

  const handleSubmit = () => {
    if (value == null || value == '') {
      toast({
        title: 'An error occurred.',
        description: 'Please answer the question before proceeding.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    } else {
      sendValue(identifier, value);
      setValue('');
    }
  };

  return (
    <>
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
      {type === 'recall' ? (
        <RadioGroup
          isInline
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>
      ) : (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type your asnwer here"
          size="sm"
        />
      )}
      <Box textAlign="center" mt={50} mb={50}>
        <Button onClick={handleSubmit}>Save answer and proceed</Button>
      </Box>
    </>
  );
};

export default CardQuestion;
