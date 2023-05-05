import React from 'react';
import { Box, Heading, Text, Image, Button, useColorModeValue,  VStack, Link as ChakraLink } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import PageTransition from './../PageTransition';
import digimonAppLogo from './../../images/digimonApp.png';

const DigimonApp = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  const linkStyle = { textDecoration: 'underline', color: 'teal.500', _hover: { textDecoration: 'none', color: 'teal.700',},
  };

  return (
    <PageTransition>
      <Box mx={{ base: '1rem', md: '3rem' }} my={{ base: '2rem', md: '4rem' }} p={{ base: '2rem', md: '4rem' }} borderRadius="md" bgColor={bgColor}>
        <VStack spacing={6} alignItems="start">
          <Heading as="h1" size="2xl" mb={4} color={textColor}>
            Digimon TCG collection application
          </Heading>
          <Heading as="h2" size="md" mb={2} color={textColor}>
            Mobile application for tracking Digimon TCG cards owned.
          </Heading>
          <Image src={digimonAppLogo} alt="Project image" my={6} borderRadius="md"  width={{ base: "100%", sm: "500px" }}
           height={{ base: "auto", sm: "500px" }} objectFit="cover"/>
          <Text fontSize="md" color={textColor}>
            This project was developed as part of my IT601 - Project
            Management paper in my second year of study at Te-Pūkenga.
            <br />
            <br />
            The purpose of the project was to create a mobile application to aid
            collectors of the Digimon TCG in keeping track of cards they own
            and upcoming cards that have not been released yet that they might
            want to acquire.
            <br />
            <br />
            <ChakraLink
              href="https://www.youtube.com/watch?v=_ALeMNoVink"
              isExternal
              {...linkStyle}
            >
              This video provides a demonstration of the application
              <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          </Text>
          <Heading as="h2" size="md" mb={2} color={textColor}>
            My role in the project
          </Heading>
          <Text>Head of documentation & programmer</Text>
          <Button colorScheme="teal" onClick={() => navigate('/projects')}>
            Go back to Projects
          </Button>
        </VStack>
      </Box>
    </PageTransition>
  );
};

export default DigimonApp;
