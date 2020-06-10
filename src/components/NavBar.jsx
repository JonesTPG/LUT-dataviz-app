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
            <p>Home</p>
          </PseudoBox>
        </Link>
        <Link to="/collections">
          <PseudoBox position="relative" p={10}>
            <p>All Collections</p>
          </PseudoBox>
        </Link>
        <Link to="/cards">
          <PseudoBox position="relative" p={10}>
            <p>All Cards</p>
          </PseudoBox>
        </Link>
        <Box p={8}>
          <IconButton
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
          >
            Change Color Mode
          </IconButton>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Navbar;
