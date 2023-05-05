import React from 'react';
import { Box, Heading, Text, VStack, Image, useBreakpointValue, useColorModeValue, Stack, Spacer } from '@chakra-ui/react';
import PageTransition from './PageTransition';
import aboutMeImage from './../images/aboutPageWithMel.jpg';
import interestsImage from './../images/lookoutPic.jpg';
import skillsImage from './../images/skills.png';

const AboutMe = () => {
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const headingColor = useColorModeValue('gray.900', 'white');
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
              <Heading mb={1} color={headingColor} fontSize="3xl">
                About Me
              </Heading>
              <Text color={textColor}>
                Hi, I'm Scott Perkins, a Bachelor of Information Technology
                student currently in my 3rd year at Te-Pūkenga, Invercargill. I
                have a passion for creating beautiful, responsive, and functional
                web applications, With experience in various programming
                languages and frameworks. <br></br><br></br>
                I have experience in multiple technologies and am always looking to learn more about the ones I know, and about ones I don't.<br></br><br></br>
                I enjoy the challenge that comes
                with learning these technologies and the feeling that comes with
                something finally working and looking the way I want it to.
              </Text>
            </VStack>
            <Spacer />
            <Image src={aboutMeImage} alt="About Me" borderRadius="md" width={{ base: "100%", sm: "400px" }} height={{ base: "auto", sm: "400px" }} objectFit="cover"/>
          </Stack>

          {/* Skills */}
          <Stack bg={rowBgColor2} p={4} borderRadius="md" spacing={4} w="100%" alignItems="flex-start" direction={stackDirection}>
            <VStack alignItems="start" flex="1" spacing={10}>
              <Heading mb={1} color={headingColor} fontSize="3xl">
                Skills
              </Heading>
              <Text color={textColor}>
                I have some
              </Text>
            </VStack>
            <Spacer />
            <Image src={skillsImage} alt="Skills" borderRadius="md" width={{ base: "100%", sm: "400px" }} height={{ base: "auto", sm: "400px" }} objectFit="cover" />
          </Stack>
          {/* Interests */}
          <Stack bg={rowBgColor1} p={4} borderRadius="md" spacing={4} w="100%" alignItems="flex-start" direction={stackDirection}>
            <VStack alignItems="start" flex="1" spacing={10}>
              <Heading mb={1} color={headingColor} fontSize="3xl">
                Interests
              </Heading>
              <Text color={textColor}>
                Outside of IT, some of my interests include going on hikes, roadtrips, or just generally exploring outside with my partner.<br></br><br></br> 
                Playing games with my friends, both online and offline (dabbling into things like Magic the Gathering, D&D 5e and plenty of boardgames).<br></br><br></br> 
                Watching movies and TV shows.<br></br><br></br> 
                When I find the time I also like to go snowboarding.<br></br><br></br> 
                Animals, particularly dogs.
              </Text>
            </VStack>
            <Spacer />
            <Image src={interestsImage} alt="Interests" borderRadius="md" width={{ base: "100%", sm: "400px" }} height={{ base: "auto", sm: "400px" }} objectFit="cover"/>
          </Stack>
        </VStack>
      </Box>
    </PageTransition>
  );
};

export default AboutMe;
