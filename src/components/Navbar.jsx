import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  HStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import { chakra } from '@chakra-ui/react';
const ChakraLink = chakra(Link);



const NavLink = ({ children, to }) => (
    <ChakraLink
      to={to}
      px={4}
      py={2}
      fontSize="lg"
      fontWeight="semibold"
      color={useColorModeValue('gray.200', 'gray.200')}
      _hover={{ textDecoration: 'underline' }}
    >
      {children}
    </ChakraLink>
  );
  
  

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Box>
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        px={{ base: 4, md: 8 }}
        py={4}
        bg={useColorModeValue('white', 'gray.800')}
        bgColor={"black"}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Toggle menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact me</NavLink>
        </HStack>

        <IconButton
          aria-label="Toggle dark mode"
          icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
      </Flex>

      {/* Mobile view */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={2} />
          <Box mt={8} px={4}>
            <NavLink  to="/home" onClick={onClose}>Home</NavLink>
            <NavLink  to="/about" onClick={onClose}>About me</NavLink>
            <NavLink  to="/projects" onClick={onClose}>Projects</NavLink>
            <NavLink  to="/contact" onClick={onClose}>Contact Me</NavLink>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
