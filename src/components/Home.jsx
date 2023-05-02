import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  Image,
  useBreakpointValue
} from '@chakra-ui/react';

const HomePage = () => {
  const bgImage = 'https://via.placeholder.com/1200x800';
  const imageSize = useBreakpointValue({ base: '100px', md: '150px' });

  return (
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
          <Heading color={"black"}mb={2}>
            Hi, I'm Jane Doe
          </Heading>
          <Text fontSize="lg" fontWeight="semibold" color={"black"}>
            Software Developer & Creative Thinker
          </Text>
          <Text fontSize="md" color={"black"}>
            I design and build beautiful web applications with an emphasis on
            usability and user experience.
          </Text>
          <Button colorScheme="teal" mt={4} as="a" href="/projects">
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
  );
};

export default HomePage;
