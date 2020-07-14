import React, { useState } from 'react';

import {
  Box,
  Button,
  Text,
  Radio,
  RadioGroup,
  Divider,
  Flex,
  Select,
  Input
} from '@chakra-ui/core';

const DemoGraphicInfo = ({ sendData }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [englishFirst, setEnglishFirst] = useState('');
  const [englishFluency, setEnglishFluency] = useState('');
  const [country, setCountry] = useState('');
  const [livedInFinland, setLivedInFinland] = useState('');

  return (
    <>
      <Text fontSize="2xl">
        Card questions are now done! Lastly, fill out some demographic
        information:
      </Text>
      <Divider></Divider>

      <Flex justifyContent="space-evenly">
        <Text>Age</Text>
        <Box>
          <Select
            onChange={(e) => console.log(e.target.value)}
            placeholder="Select option"
          >
            <option value="18-20">18-20</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
      <Divider></Divider>

      <Flex justifyContent="space-evenly">
        <Text>Gender</Text>
        <Box>
          <Input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Type your asnwer here"
            size="sm"
          />
        </Box>
      </Flex>
      <Divider></Divider>

      <Flex justifyContent="space-evenly">
        <Text>Education</Text>
        <Box>
          <Select
            onChange={(e) => console.log(e.target.value)}
            placeholder="Select option"
          >
            <option value="High school">High school</option>
            <option value="Some high school">Some high school</option>
            <option value="Bachelor’s degree">Bachelor’s degree</option>
          </Select>
        </Box>
      </Flex>
      <Divider></Divider>

      <Flex justifyContent="space-evenly">
        <Text>Is English your first language?</Text>
        <RadioGroup
          isInline
          onChange={(e) => setEnglishFirst(e.target.value)}
          value={englishFirst}
        >
          <Radio value="yes">yes</Radio>
          <Radio value="no">no</Radio>
        </RadioGroup>
      </Flex>
      <Divider></Divider>

      <Box textAlign="center" mt={50} mb={50}>
        <Button
          onClick={sendData({
            gender: gender,
            nationality: country,
            age: age
          })}
        >
          Submit answers and proceed to earn your reward
        </Button>
      </Box>
    </>
  );
};

export default DemoGraphicInfo;
