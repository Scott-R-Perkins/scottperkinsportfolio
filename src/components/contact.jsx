import React, { useRef } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import PageTransition from './PageTransition';

const ContactMe = () => {
  const toast = useToast();
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const phone = event.target.phone.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (!name || !phone || !email || !message) {
      toast({
        title: 'Error',
        description: 'Please fill in all the fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!email.includes('@')) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Handle the form submission here

    // Clear the input fields and display a success notification
    formRef.current.reset();
    toast({
      title: 'Success',
      description: 'Your message has been sent.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <PageTransition>
      <Box p={{ base: 4, md: 8 }}>
      <Flex direction={flexDirection} w="100%" justifyContent="space-between">
        {/* Contact Details */}
        <VStack alignItems="start" flex="1">
          <Heading mb={4}>Contact Details</Heading>
          <Text>Email: your.email@example.com</Text>
          <Text>Phone: +1 (123) 456-7890</Text>
        </VStack>

        {/* Contact Form */}
        <VStack
          as="form"
          onSubmit={handleSubmit}
          spacing={4}
          w="100%"
          flex="1"
          ref={formRef}
          mt={{ base: 8, md: 0 }}
        >
          <Heading mb={4}>Get in Touch</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input type="tel" name="phone" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea name="message" />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Send Message
          </Button>
        </VStack>
      </Flex>
    </Box>
    </PageTransition>
    
  );
};

export default ContactMe;