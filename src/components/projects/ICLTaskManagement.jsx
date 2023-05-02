import React from 'react';
import { Box, Heading, Text, Image, Button, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ICLTaskManagement = () => {
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
                Project Title
            </Heading>
            <Heading as="h2" size="md" mb={2} color={textColor}>
                Project Subtitle
            </Heading>
            <Image
                src="https://via.placeholder.com/500"
                alt="Project image"
                my={6}
                borderRadius="md"
            />
            <Text fontSize="md" color={textColor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                purus vitae odio consequat, eu fermentum sapien bibendum. Mauris
                ultricies est id semper cursus. Aliquam erat volutpat. Praesent tempus,
                quam et convallis vestibulum, ex justo venenatis turpis, vitae commodo
                urna odio non libero. Nullam vitae ultrices justo. Duis vel ipsum
                auctor, luctus elit at, aliquam velit.
            </Text>
            <Button colorScheme="teal" onClick={() => navigate("/projects")}>
                Go back to Projects
            </Button>

        </Box>
    );
};

export default ICLTaskManagement;
