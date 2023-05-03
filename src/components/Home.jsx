import React, { useState } from 'react';
import { Box, Heading, Text, Button, VStack, Flex, Image, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bgImage from './../images/homePageBG.png';
import faceImage from './../images/face.jpg';
import PageTransition from './PageTransition';
import { TypeAnimation } from 'react-type-animation';


const HomePage = () => {
  const imageSize = useBreakpointValue({ base: '200px', md: '250px' });
  const [textColor, setTextColor] = useState('red');

  return (
    <PageTransition>
      <Box>
        <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" minHeight="70vh" backgroundImage={bgImage} backgroundPosition="center"
          backgroundRepeat="no-repeat" backgroundSize="cover" py={16} px={{ base: 4, md: 12 }}>
          <VStack spacing={4} alignItems="start" maxW="md" bgColor={useColorModeValue('white', 'gray.700')} borderRadius={"5%"} padding={"8"}> {/*Move this over slightly, and try and put a box around it so its visable with the bg image */}
            <Heading color={useColorModeValue('black', 'white')} mb={2}>
              Scott Perkins
            </Heading>
            <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue('black', 'white')}>
              IT Student  & aspiring Software Developer
            </Text>
            <Text fontSize="md" color={useColorModeValue('black', 'white')}>
              I'm an IT student with an interest in developing useful and efficient software applications, websites, and mobile applications.
              <br></br>
              <br></br>
              Within this portfolio you'll find some information about me, my skills and interests, as well as information about some of the projects I have worked on or am currently working on and information about contacting me.
            </Text>
            <Button colorScheme="teal" mt={4} as={Link} to="/projects">
              View My Projects
            </Button>
            <>
    <div
      style={{
        fontSize: '35px',
        color: textColor,
        /* when working without ref and classNames, the manipulated style needs to be
         applied to the parent element, because the TypeAnimation component is perma-memoized */
      }}
    >
      <TypeAnimation
        sequence={[
          'One',
          800,
          () => setTextColor('aqua'),
          'One Two',
          800,
          () => setTextColor('deeppink'),
          'One Two Three',
          1000,
          () => setTextColor('darkkhaki'),
          '',
        ]}
        repeat={Infinity}
      />
    </div>
    <button
      onClick={() => {
        const items = [
          'blue',
          'green',
          'purple',
          'pink',
          'brown',
          'darkmagenta',
          'darksalmon',
          'dodgerblue',
          'firebrick',
          'darkviolet',
        ];
        setTextColor(items[Math.floor(Math.random() * items.length)]); // set random color
      }}
    >
      Change Color
    </button>
  </>
          </VStack>

          <Image src={faceImage} alt="Scott Perkins" borderRadius="full" boxShadow="lg" objectFit="cover" width={imageSize} height={imageSize} mt={{ base: 8, md: 0 }} />
        </Flex>
      </Box>
    </PageTransition>
  );
};

export default HomePage;
