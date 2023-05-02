import React from 'react';
import { Box, Heading, Text, Image, Button, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const DemonBreach = () => {
    const navigate = useNavigate();
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'gray.200');

    return (
        <Box
            mx={{ base: '1rem', md: '3rem' }}
            my={{ base: '2rem', md: '4rem' }}
            p={{ base: '2rem', md: '4rem' }}
            borderRadius="md"
            bgColor={bgColor}
        >
            <Heading as="h1" size="2xl" mb={4} color={textColor}>
                Demon Breach
            </Heading>
            <Heading as="h2" size="md" mb={2} color={textColor}>
                Game project for year 2 Game Development
            </Heading>
            <Image
                src="https://via.placeholder.com/500"
                alt="Project image"
                my={6}
                borderRadius="md"
            />
            <Text fontSize="md" color={textColor}>
                This project was completed with 1 team member and was a 2D twin-stick, top down shooter game developed as part of my game development paper.
            </Text>
            <Button colorScheme="teal" onClick={() => navigate("/projects")}>
                Go back to Projects
            </Button>

        </Box>
    );
};

export default DemonBreach;
