import React from 'react';
import { Box, Flex, IconButton, useColorMode, useColorModeValue, HStack, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { chakra } from '@chakra-ui/react';
import { useBreakpointValue } from "@chakra-ui/react";

const ChakraLink = chakra(Link);

const NavLink = ({ children, to, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeColor = useColorModeValue('teal.500', 'teal.300');
  const linkColor = useColorModeValue('gray.200', 'gray.200');
  const hoverColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <ChakraLink display={{ base: 'block', md: 'inline' }} mb={{ base: 2, md: 0 }} to={to} px={4} py={2} fontSize="lg" fontWeight={isActive ? 'semibold' : 'normal'}
      color={isActive ? activeColor : linkColor} _hover={{textDecoration: 'underline', color: hoverColor, }}
      onClick={onClick}>
      {children}
    </ChakraLink>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const isMobileView = useBreakpointValue({ base: true, md: false });

  const handleLinkClick = () => {
    if (isMobileView) {
      onClose();
    }
  };

  return (
    <Box position="sticky" top="0" zIndex="10" width="100%">
      <Flex as="header" justifyContent="space-between" alignItems="center" px={{ base: 4, md: 8 }} py={4} bg={useColorModeValue('white', 'gray.800')}
        bgColor={"black"} borderBottomWidth="1px" borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        
        >
        <IconButton display={{ base: 'flex', md: 'none' }} aria-label="Toggle menu" icon={<HamburgerIcon />} onClick={onOpen} color={useColorModeValue("black", "white")}/>
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
        <DrawerContent bg={useColorModeValue("black", "gray.800")}>
          <DrawerCloseButton mt={2} />
          <Box mt={8} px={4}>
            <NavLink to="/home" onClick={handleLinkClick}>Home</NavLink>
            <NavLink to="/about" onClick={handleLinkClick}>About me</NavLink>
            <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>
            <NavLink to="/contact" onClick={handleLinkClick}>Contact Me</NavLink>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
export default Navbar;
