import React from 'react';
import { Box, Heading, Text, Image, Button, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PageTransition from './../PageTransition';

const QRAttendance = () => {
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
            <Image src="https://via.placeholder.com/500" alt="Project image" my={6} borderRadius="md"/>
            <Text fontSize="md" color={textColor}>
                This project was developed as part of my IT721 - Software Engineering paper in my third year of study at Te-Pūkenga.<br></br><br></br>
                The project is comprised of a mobile application, a web application and a database.
                The purpose of the project is to streamline process of logging student attendance. With this system the class tutor can generate a QR code for a specific class session and display it on the screen for students to scan with their phones through the mobile application, which will then send the students ID to the web server to log their attendance.
                The mobile application uses location tracking with a location it parses from the QR code and the users location to verify they are at the proper location before sending information to the web app so they can't scan from home.
            </Text>
                <Heading as="h2" size="md" mb={2} color={textColor}>
                    My role in the project
                </Heading>
                <Text>
                    Main mobile developer & head of the mobile documentation.
                </Text>
            <br></br>
            <Button colorScheme="teal" onClick={() => navigate("/projects")}>
                Go back to Projects
            </Button>
        </Box>
        </PageTransition>
        
    );
};

export default QRAttendance;

