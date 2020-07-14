import React, { useState } from 'react';

import {
  Box,
  Button,
  Text,
  Radio,
  RadioGroup,
  Divider,
  Flex
} from '@chakra-ui/core';

const DemoGraphicInfo = ({ sendData }) => {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [nationality, setNationality] = useState(null);

  return (
    <>
      <Text fontSize="2xl">
        Card questions are now done! Lastly, fill out some demographic
        information:
      </Text>
      <Divider></Divider>

      <Flex justifyContent="space-evenly">
        <Text>Gender</Text>
        <RadioGroup
          isInline
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup>
      </Flex>
      <Divider></Divider>

      <Flex justifyContent="space-evenly">
        <Text>Age</Text>
        <RadioGroup
          isInline
          onChange={(e) => setAge(e.target.value)}
          value={age}
        >
          <Radio value="10-20">10-20</Radio>
          <Radio value="20-40">20-40</Radio>
          <Radio value="40-60">40-60</Radio>
        </RadioGroup>
      </Flex>
      <Divider></Divider>

      <Flex justifyContent="space-evenly">
        <Text>Nationality</Text>
        <RadioGroup
          isInline
          onChange={(e) => setNationality(e.target.value)}
          value={nationality}
        >
          <Radio value="european">European</Radio>
          <Radio value="american">American</Radio>
          <Radio value="asian">Asian</Radio>
        </RadioGroup>
      </Flex>
      <Divider></Divider>

      <Box textAlign="center" mt={50} mb={50}>
        <Button
          onClick={sendData({
            gender: gender,
            nationality: nationality,
            age: age
          })}
        >
          Submit and proceed to the survey
        </Button>
      </Box>
    </>
  );
};

export default DemoGraphicInfo;
