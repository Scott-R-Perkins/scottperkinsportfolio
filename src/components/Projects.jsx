import React from 'react';
import { Box, Grid, GridItem, Heading, Text, Image, Button, useBreakpointValue, Flex, useColorModeValue } from '@chakra-ui/react';
import PageTransition from './PageTransition';
import { Link } from 'react-router-dom';
import iclLogo from './../images/ICLLogo.jpg';
import QRAttendanceLogo from './../images/qrCodeApp.png';
import DemonBreachLogo from './../images/demonBreachLogo.png';
import digimonAppLogo from './../images/digimonApp.png';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('black', 'white');
  const headingColor = useColorModeValue('black', 'white');

  return (
    <PageTransition>
      <Box borderWidth="1px" borderRadius="lg" p={4} overflow="hidden" bg={useBreakpointValue({ base: cardBgColor, md: cardBgColor })} boxShadow="base" height="100%">
        <Flex flexDirection="column" justifyContent="space-between" h="100%" alignItems="flex-start">
          <Box>
            <Image src={imageUrl} alt={title} mb={4} width={{ base: "100%", sm: "300px" }} height={{ base: "auto", sm: "300px" }} objectFit="cover"/>
            <Heading size="md" mb={2} color={headingColor}>
              {title}
            </Heading>
            <Text mb={4} minHeight="3.5em" color={textColor}>{description}</Text>
          </Box>
          <Link to={projectUrl}>
            <Button colorScheme="teal" maxWidth="80%">
              View Project
            </Button>
          </Link>
        </Flex>
      </Box>
    </PageTransition>
  );
};



const Projects = () => {
  const projects = [
    {
      title: '(WIP) Task management application',
      description: 'Task management mobile application for ICL mall staff.',
      imageUrl: iclLogo,
      projectUrl: '/projects/icltaskmanagement',
    },
    {
      title: '(WIP) QR attendance scanner',
      description: 'A mobile application designed to let users scan a QR code to log attendance to a class or event',
      imageUrl: QRAttendanceLogo,
      projectUrl: '/projects/qrattendance',
    },
    {
      title: 'Demon Breach',
      description: 'Top down twinstick shooter game developed for my second year game development paper.',
      imageUrl: DemonBreachLogo,
      projectUrl: '/projects/demonbreach',
    },
    {
      title: 'Digimon card collection app',
      description: 'Mobile application for keeping track of owned Digimon cards for the Digimon TCG',
      imageUrl: digimonAppLogo,
      projectUrl: '/projects/digimonapp',
    },
    // Add more projects here
  ];

  return (
    <Box px={{ base: 4, md: 8 }} py={8}>
      <Heading as="h2" mb={8} textAlign="center">
        My Projects
      </Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)',}} gap={8}>
        {projects.map((project, index) => (
          <GridItem key={index}>
            <ProjectCard {...project} />
          </GridItem>
        ))}

      </Grid>
    </Box>
  );
};

export default Projects;