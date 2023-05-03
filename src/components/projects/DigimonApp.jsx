import React from 'react';
import { Box, Heading, Text, Image, Button, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom';
import PageTransition from './../PageTransition';

const DigimonApp = () => {
    const navigate = useNavigate();
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'gray.200');

    return (
        <PageTransition>
            <Box mx={{ base: '1rem', md: '3rem' }} my={{ base: '2rem', md: '4rem' }} p={{ base: '2rem', md: '4rem' }} borderRadius="md" bgColor={bgColor}>
                <Heading as="h1" size="2xl" mb={4} color={textColor}>
                    QR attendance application
                </Heading>
                <Heading as="h2" size="md" mb={2} color={textColor}>
                    Mobile application for tracking attendance via QR codes.
                </Heading>
                <Image
                    src="https://via.placeholder.com/500"
                    alt="Project image"
                    my={6}
                    borderRadius="md"
                />
                <Text fontSize="md" color={textColor}>
                    This project was developed as part of my IT601 - Project Management paper in my second year of study at Te-Pūkenga.<br></br><br></br>
                    The purpose of the project was to create a mobile application to aid collectors of the Digimon TCG in keeping track of cards they own and upcoming cards that have not been released yet that they might want to aquire.
                    <br></br><br></br>
                    <Link href='https://www.youtube.com/watch?v=_ALeMNoVink' isExternal>
                        This video provides a demonstration of the application<ExternalLinkIcon mx='2px' />
                    </Link>
                </Text>
                <br></br>
                <Heading as="h2" size="md" mb={2} color={textColor}>
                    My role in the project
                </Heading>
                <Text>
                    Head of documentation & programmer
                </Text>
                <br></br>
                <Button colorScheme="teal" onClick={() => navigate("/projects")}>
                    Go back to Projects
                </Button>
            </Box>
        </PageTransition>

    );
};

export default DigimonApp;