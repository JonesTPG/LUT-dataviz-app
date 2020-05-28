import React from 'react';
import {
  Flex,
  Stack,
  PseudoBox,
  useColorMode,
  IconButton,
  Box,
  Image
} from '@chakra-ui/core';

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
      align="center"
      fontSize={['md', 'lg', 'xl', 'xl']}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={['50vw', '50vw', '50vw', '50vw']}>
        <Stack
          spacing={8}
          color={textColor[colorMode]}
          justify="center"
          align="center"
          isInline
        >
          <PseudoBox position="relative">
            <a>Home</a>
          </PseudoBox>
          <PseudoBox position="relative">
            <a>All Cards</a>
          </PseudoBox>
          <PseudoBox position="relative">
            <a>XXXX</a>
          </PseudoBox>
          <PseudoBox position="relative">
            <a>XXXX</a>
          </PseudoBox>
        </Stack>
        <Box>
          <IconButton
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
