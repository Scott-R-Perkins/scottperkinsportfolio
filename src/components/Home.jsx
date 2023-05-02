import React from 'react';
import { Box, Heading, Text, Button, VStack, Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import PageTransition from './PageTransition';

const HomePage = () => {
  const bgImage = 'https://via.placeholder.com/1200x800';
  const imageSize = useBreakpointValue({ base: '100px', md: '150px' });

  return (
    <PageTransition>
      <Box>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-around"
          minHeight="70vh"
          backgroundImage={`url(${bgImage})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          py={16}
          px={{ base: 4, md: 8 }}
        >
          <VStack spacing={4} alignItems="start" maxW="md">
            <Heading color={"black"} mb={2}>
              Hi, I'm Scott Perkins
            </Heading>
            <Text fontSize="lg" fontWeight="semibold" color={"black"}>
              IT Student  & aspiring Software Developer
            </Text>
            <Text fontSize="md" color={"black"}>
              IT student with an interest in developing useful and efficient software applications, websites, and mobile applications.
            </Text>
            <Button colorScheme="teal" mt={4} as={Link} to="/projects">
              View My Projects
            </Button>
          </VStack>

          <Image
            src="https://via.placeholder.com/150"
            alt="Jane Doe"
            borderRadius="full"
            boxShadow="lg"
            objectFit="cover"
            width={imageSize}
            height={imageSize}
            mt={{ base: 8, md: 0 }}
          />
        </Flex>
      </Box>
    </PageTransition>

  );
};

export default HomePage;
