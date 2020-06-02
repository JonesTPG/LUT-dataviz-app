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
      w="100vw"
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
      <Flex w={['100vw', '100vw', '100vw', '100vw']} justify="center">
        <Stack
          spacing={8}
          color={textColor[colorMode]}
          justify="center"
          isInline
        >
          <Link to="/">
            <PseudoBox position="relative" p={10}>
              <p>Home</p>
            </PseudoBox>
          </Link>
          <Link to="cards">
            <PseudoBox position="relative" p={10}>
              <p>All Cards</p>
            </PseudoBox>
          </Link>
        </Stack>
        <Box>
          <IconButton
            mt={8}
            ml={5}
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
          >
            Change Color Mode
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
