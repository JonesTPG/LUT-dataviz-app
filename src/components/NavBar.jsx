import React from 'react';
import { Flex, Progress, useColorMode, IconButton, Box } from '@chakra-ui/core';

const Navbar = ({ progress }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'gray.300', dark: 'gray.600' };
  const textColor = { light: 'black', dark: 'gray.100' };
  return (
    <>
      <Flex
        bg={bgColor[colorMode]}
        align="center"
        color={textColor[colorMode]}
        justify="center"
        fontSize={['md', 'lg', 'xl', 'xl']}
        h="7vh"
        minH="50px"
        boxShadow="md"
        p={2}
      >
        <Box>
          <IconButton
            ml={5}
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
          >
            Change Color Mode
          </IconButton>
        </Box>
      </Flex>
      <Progress value={progress} />
    </>
  );
};

export default Navbar;
