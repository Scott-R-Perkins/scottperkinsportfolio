import React from 'react';
import { Box, Heading, Text, VStack, Image, useBreakpointValue, useColorModeValue, Stack, Spacer } from '@chakra-ui/react';
import PageTransition from './PageTransition';

const AboutMe = () => {
  const textColor = useColorModeValue('black', 'white');
  const headingColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('white', 'gray.700');
  const rowBgColor1 = useColorModeValue('gray.100', 'gray.800');
  const rowBgColor2 = useColorModeValue('white', 'gray.700');
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <PageTransition>
      <Box p={{ base: 4, md: 8 }} bg={useBreakpointValue({ base: bgColor, md: bgColor })}>
        <VStack spacing={12} alignItems="start" w="100%">
          {/* About Me */}
          <Stack bg={rowBgColor1} p={4} borderRadius="md" spacing={4} w="100%" alignItems="flex-start" direction={stackDirection}>
            <VStack alignItems="start" flex="1" spacing={10}>
              <Heading mb={1} color={headingColor}>
                About Me
              </Heading>
              <Text color={textColor}>
                Hi, I'm Scott Perkins, a Bachelor of Information Technology
                student currently in my 3rd year at Te-Pūkenga, Invercargill. I
                have a passion for creating beautiful, responsive, and functional
                web applications, With experience in various programming
                languages and frameworks. <br></br><br></br>
                Most of my experience is with C#, Javascript,
                React and <i>some</i> chakra-ui, but I also have experience in other tools such as mySQL, Jade, Project management and more.<br></br><br></br>
                I enjoy the challenge that comes
                with learning these technologies and the feeling that comes with
                something finally working and looking the way I want it to.
              </Text>
            </VStack>
            <Spacer />
            <Image src="https://via.placeholder.com/300" alt="About Me" borderRadius="md" />
          </Stack>

          {/* Skills */}
          <Stack bg={rowBgColor2} p={4} borderRadius="md" spacing={4} w="100%" alignItems="flex-start" direction={stackDirection}>
            <VStack alignItems="start" flex="1" spacing={10}>
              <Heading mb={1} color={headingColor}>
                Skills
              </Heading>
              <Text color={textColor}>
                I have some
              </Text>
            </VStack>
            <Spacer />
            <Image src="https://via.placeholder.com/300" alt="Skills" borderRadius="md" />
          </Stack>

          {/* Interests */}
          <Stack bg={rowBgColor1} p={4} borderRadius="md" spacing={4} w="100%" alignItems="flex-start" direction={stackDirection}>
            <VStack alignItems="start" flex="1" spacing={10}>
              <Heading mb={1} color={headingColor}>
                Interests
              </Heading>
              <Text color={textColor}>
                I have some
              </Text>
            </VStack>
            <Spacer />
            <Image src="https://via.placeholder.com/300" alt="Interests" borderRadius="md" />
          </Stack>
        </VStack>
      </Box>
    </PageTransition>
  );
};

export default AboutMe;
