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

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  const cardBgColor = useColorModeValue('white', 'gray.700');

  return (
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
  );
};
  
  

const Projects = () => {
  const projects = [
    {
      title: '(WIP) Task management application',
      description: 'Task management mobile application for ICL mall staff.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: '/project-1',
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
    <Box p={{ base: 4, md: 8 }}>
      <Heading mb={8}>My Projects</Heading>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={8}
        alignItems="stretch"
      >
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
