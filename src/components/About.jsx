import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import PageTransition from './PageTransition';

const AboutMe = () => {
  const textColor = useColorModeValue('black', 'white');
  const headingColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('white', 'gray.700');

  return (
    <PageTransition>
      <Box
        p={{ base: 4, md: 8 }}
        bg={useBreakpointValue({ base: bgColor, md: bgColor })}
      >
        <VStack spacing={12} alignItems="start" w="100%">
          {/* About Me */}
          <HStack spacing={4} w="100%" alignItems="flex-start">
            <VStack alignItems="start" flex="1" spacing={10}>
              <Heading mb={4} color={headingColor}>
                About Me
              </Heading>
              <Text color={textColor}>
                Hi, I'm Scott Perkins, a Bachelor of Information Technology
                student currently in my 3rd year at Te Pūkenga, Invercargill. I
                have a passion for creating beautiful, responsive, and functional
                web applications. With experience in various programming
                languages and frameworks, however primarily with C#, Javascript,
                React and <i>some</i> chakra-ui. I enjoy the challenge that comes
                with learning these technologies and the feeling that comes with
                something finally working and looking the way I want it to.
              </Text>
            </VStack>
            <Image
              src="https://via.placeholder.com/300"
              alt="About Me"
              borderRadius="md"
            />
          </HStack>

          {/* Skills */}
          <HStack spacing={4} w="100%" alignItems="flex-start">
            <Image
              src="https://via.placeholder.com/300"
              alt="Skills"
              borderRadius="md"
            />
            <VStack alignItems="start" flex="1" spacing={10}>
              <Heading mb={4} color={headingColor}>
                Skills
              </Heading>
              <Text color={textColor}>
                {/*I have experience working with various programming languages and
              technologies, including JavaScript, React, Chakra UI, Node.js,
              Express, MongoDB, and more. I'm constantly learning and improving
              my skill set to stay up-to-date with industry best practices.*/}
                I have some
              </Text>
            </VStack>
          </HStack>
          {/* Interests */}
          <HStack spacing={4} w="100%" alignItems="flex-start">
            <VStack alignItems="start" flex="1" spacing={10}>
              <Heading mb={4} color={headingColor}>
                Interests
              </Heading>
              <Text color={textColor}>
                {/*When I'm not coding, you can find me hiking, exploring new
              restaurants, or curled up with a good book. I'm always eager to
              learn new technologies and challenge myself in both my personal
              and professional life. */}I have some
              </Text>
            </VStack>
            <Image
              src="https://via.placeholder.com/300"
              alt="Interests"
              borderRadius="md"
            />
          </HStack>
        </VStack>
      </Box>
    </PageTransition>
  );
};

export default AboutMe;