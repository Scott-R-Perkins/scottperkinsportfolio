import React, { useState } from 'react';
import { Box, Heading, Text, Button, VStack, Flex, Image, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bgImage from './../images/homePageBG.png';
import faceImage from './../images/face.jpg';
import PageTransition from './PageTransition';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  const imageSize = useBreakpointValue({ base: '250px', md: '400px' });
  const [textColor, setTextColor] = useState('black');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColorLight = useColorModeValue('gray.800', 'gray.200');

  return (
    <PageTransition>
      <Box>
        <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" minHeight="70vh" backgroundImage={bgImage} backgroundPosition="center"
          backgroundRepeat="no-repeat" backgroundSize="cover" py={16} px={{ base: 4, md: 12 }}>
          <VStack spacing={4} alignItems="start" maxW="md" bgColor={useColorModeValue('white', 'gray.700')} borderRadius={"15%"} padding={"8"}>
            <Heading color={headingColor} mb={2} fontSize="3xl">
              Scott Perkins
            </Heading>
            <>
              <div
                style={{
                  fontSize: '25px', color: textColor, whiteSpace: 'pre-line'
                }}>
                <TypeAnimation
                  sequence={[
                    'Developer',
                    800,
                    () => setTextColor('black'),
                    'Developer, creative',
                    800,
                    () => setTextColor('green'),
                    'Developer, creative, student',
                    1000,
                    () => setTextColor('purple'),
                    '',
                  ]}
                  repeat={Infinity}
                />
              </div>
            </>
            <Text fontSize="xl" fontWeight="semibold" color={headingColor}>
              IT Student  & aspiring Software Developer
            </Text>
            <Text fontSize="md" color={textColorLight}>
              I'm an IT student with an interest in developing useful and efficient software applications, websites, and mobile applications.
              <br></br>
              <br></br>
              Within this portfolio you'll find some information about me, my skills and interests, as well as information about some of the projects I have worked on or am currently working on and information about contacting me.
            </Text>
            <Button colorScheme="teal" mt={4} as={Link} to="/projects">
              View My Projects
            </Button>
          </VStack>

          <Image src={faceImage} alt="Scott Perkins" borderRadius="full" boxShadow="lg" objectFit="cover" width={imageSize} height={imageSize} mt={{ base: 8, md: 0 }} />
        </Flex>
      </Box>
    </PageTransition>
  );
};

export default HomePage;
