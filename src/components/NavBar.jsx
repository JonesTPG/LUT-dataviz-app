import React from 'react';
import {
  Flex,
  Stack,
  PseudoBox,
  useColorMode,
  IconButton,
  Box
} from '@chakra-ui/core';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'gray.300', dark: 'gray.600' };
  const textColor = { light: 'black', dark: 'gray.100' };
  return (
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
      <Stack spacing={8} color={textColor[colorMode]} justify="center" isInline>
        <Link to="/">
          <PseudoBox position="relative" p={10}>
            <p>Welcome</p>
          </PseudoBox>
        </Link>
        <Link to="/assignment">
          <PseudoBox position="relative" p={10}>
            <p>Assignment</p>
          </PseudoBox>
        </Link>
        <Link to="/survey">
          <PseudoBox position="relative" p={10}>
            <p>Survey</p>
          </PseudoBox>
        </Link>
      </Stack>
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
  );
};

export default Navbar;
