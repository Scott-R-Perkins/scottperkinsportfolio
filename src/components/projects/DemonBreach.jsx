import React from 'react';
import { Box, Heading, Text, Image, Button, useColorModeValue,  VStack, Link as ChakraLink } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import PageTransition from './../PageTransition';
import DemonBreachLogo from './../../images/demonBreachLogo.png';

const DemonBreach = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const linkStyle = {
    textDecoration: 'underline', // Add an underline to the link
    color: 'teal.500', // Change the link color
    _hover: {
      textDecoration: 'none', // Remove the underline on hover
      color: 'teal.700', // Change the link color on hover
    },
  };

  return (
    <PageTransition>
      <Box mx={{ base: '1rem', md: '3rem' }} my={{ base: '2rem', md: '4rem' }} p={{ base: '2rem', md: '4rem' }} borderRadius="md" bgColor={bgColor}>
        <VStack spacing={6} alignItems="start">
          <Heading as="h1" size="2xl" mb={4} color={textColor}>
            Demon Breach
          </Heading>
          <Heading as="h2" size="md" mb={2} color={textColor}>
            Game project for year 2 Game Development
          </Heading>
          <Image
            src={DemonBreachLogo}
            alt="Project image"
            my={6}
            borderRadius="md"
            width={{ base: "100%", sm: "500px" }} height={{ base: "auto", sm: "500px" }} objectFit="cover"
          />
          <Text fontSize="md" color={textColor}>
            This project was completed with 1 team member and was a 2D
            twin-stick, top down shooter game developed as part of my IT610 -
            Game Development paper during my second year of study at
            Te-Pūkenga.
            <br />
            <br />
            This game was created in Unity using C#.
          </Text>
          <ChakraLink
              href="https://www.youtube.com/watch?v=6xdgxNAmx-g&feature=youtu.be&ab_channel=Scotteeh" isExternal {...linkStyle}>
              This video provides a short trailer for the game, made for this Game development paper.
              <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          <Heading as="h2" size="md" mb={2} color={textColor}>
            My role in the project
          </Heading>
          <Text>Main developer & Art designer</Text>
          <Button colorScheme="teal" onClick={() => navigate('/projects')}>
            Go back to Projects
          </Button>
        </VStack>
      </Box>
    </PageTransition>
  );
};

export default DemonBreach;
