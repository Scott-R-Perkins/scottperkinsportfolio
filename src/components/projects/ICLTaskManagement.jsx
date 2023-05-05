import React from 'react';
import { Box, Heading, Text, Image, Button, useColorModeValue,  VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PageTransition from './../PageTransition';
import iclLogo from './../../images/ICLLogo.jpg';

const ICLTaskManagement = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <PageTransition>
      <Box mx={{ base: '1rem', md: '3rem' }} my={{ base: '2rem', md: '4rem' }} p={{ base: '2rem', md: '4rem' }} borderRadius="md" bgColor={bgColor}>
        <VStack spacing={6} alignItems="start">
          <Heading as="h1" size="2xl" mb={4} color={textColor}>
            ICL Task Management application
          </Heading>
          <Heading as="h2" size="md" mb={2} color={textColor}>
            Mobile task management application for mall staff
          </Heading>
          <Image
            src={iclLogo}
            alt="Project image"
            my={6}
            borderRadius="md"
            width={{ base: "100%", sm: "500px" }} height={{ base: "auto", sm: "500px" }} objectFit="cover"
          />
          <Text fontSize="md" color={textColor}>
            This application is a current WIP application I am building with my
            team as my capstone project for the year of 2023 in my IT701 -
            Project paper.
            <br />
            <br />
            The application is intended for use by the mall staff to help track
            the tasks they are required to do around the mall during the day,
            as well as time stamp when they are completing tasks for review by
            management.
          </Text>
          <Heading as="h2" size="md" mb={2} color={textColor}>
            My role in the project
          </Heading>
          <Text>Mobile & web development.</Text>
          <Button colorScheme="teal" onClick={() => navigate('/projects')}>
            Go back to Projects
          </Button>
        </VStack>
      </Box>
    </PageTransition>
  );
};

export default ICLTaskManagement;
