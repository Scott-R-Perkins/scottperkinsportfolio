import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Button,
  useBreakpointValue,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import PageTransition from './PageTransition';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  const cardBgColor = useColorModeValue('white', 'gray.700');

  return (
    <PageTransition>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        overflow="hidden"
        bg={useBreakpointValue({ base: cardBgColor, md: cardBgColor })}
        boxShadow="base"
        height="100%"
      >
        <Flex flexDirection="column" justifyContent="space-between" h="100%" alignItems="flex-start">
          <Box>
            <Image src={imageUrl} alt={title} mb={4} />
            <Heading size="md" mb={2}>
              {title}
            </Heading>
            <Text mb={4} minHeight="3.5em">{description}</Text>
          </Box>
          <Button
            as="a"
            href={projectUrl}
            colorScheme="teal"
            maxWidth="80%"
          >
            View Project
          </Button>
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
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: '/projects/icl-task-management',
    },
    {
      title: 'Demon Breach',
      description: 'Top down twinstick shooter game.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: '/project-2',
    },
    // Add more projects here
  ];

  return (
    <Box px={{ base: 4, md: 8 }} py={8}>
      <Heading as="h2" mb={8} textAlign="center">
        My Projects
      </Heading>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={8}
      >
        {projects.map((project, index) => (
          <GridItem key={index}>
            <Link to={project.projectUrl}>
              <ProjectCard {...project} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
  };
  
  export default Projects;