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
  const [otherEducation, setOtherEducation] = useState('');
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
            onChange={(e) => setAge(e.target.value)}
            placeholder="Select option"
          >
            <option value="18-20">18-20</option>
            <option value="21-25">21-25</option>
            <option value="26-30">26-30</option>
            <option value="31-35">31-35</option>
            <option value="36-40">36-40</option>
            <option value="41-45">41-45</option>
            <option value="46-50">46-50</option>
            <option value="51-55">51-55</option>
            <option value="56-60">56-60</option>
            <option value="61-65">61-65</option>
            <option value="65+">65+</option>
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
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Select option"
          >
            <option value="High school">High school</option>
            <option value="Some high school">Some high school</option>
            <option value="Bachelor’s degree">Bachelor’s degree</option>
            <option value="Master’s degree">Master’s degree</option>
            <option value="Ph.D. or higher">Ph.D. or higher</option>
            <option value="Associates degree">Associates degree</option>
            <option value="Trade school">Trade school</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
          </Select>
          {education === 'Other' && (
            <Box>
              <p>Please spesify your education below:</p>
              <Input
                value={otherEducation}
                onChange={(e) => setOtherEducation(e.target.value)}
                placeholder="Type your asnwer here"
                size="sm"
              />
            </Box>
          )}
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

      {englishFirst === 'no' && (
        <>
          <Flex justifyContent="space-evenly">
            <Text>
              What is your level of fluency in a scale of 1-5 where 1 is not at
              all fluent and 5 is extremely fluent?
            </Text>
            <RadioGroup
              isInline
              onChange={(e) => setEnglishFluency(e.target.value)}
              value={englishFluency}
            >
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
            </RadioGroup>
          </Flex>
          <Divider></Divider>
        </>
      )}

      <Flex justifyContent="space-evenly">
        <Text>
          In which country did your school education primarily take place?
        </Text>
        <Box>
          <Input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Type your asnwer here"
            size="sm"
          />
        </Box>
      </Flex>
      <Divider></Divider>

      <Flex justifyContent="space-evenly">
        <Text>Do you live or have you ever lived in Finland?</Text>
        <RadioGroup
          isInline
          onChange={(e) => setLivedInFinland(e.target.value)}
          value={livedInFinland}
        >
          <Radio value="yes">yes</Radio>
          <Radio value="no">no</Radio>
        </RadioGroup>
      </Flex>
      <Divider></Divider>

      <Box textAlign="center" mt={50} mb={50}>
        <Button
          onClick={sendData({
            age: age,
            gender: gender,
            education: education,
            otherEducation: otherEducation,
            englishFirst: englishFirst,
            englishFluency: englishFluency,
            country: country,
            livedInFinland: livedInFinland
          })}
        >
          Submit answers and proceed to earn your reward
        </Button>
      </Box>
    </>
  );
};

export default DemoGraphicInfo;
