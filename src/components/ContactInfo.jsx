import React, { useRef } from 'react';
import {
  Box, VStack, Heading, Text, FormControl, FormLabel, Input, Textarea,
  Button, useToast, Flex, useBreakpointValue, useColorModeValue
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

    var discordMessage = {
      username: 'Message notifier',
      content: 'Message from a portfolio visitor',
      embeds: [
        {
          fields: [
            { name: 'Name', value: name },
            { name: 'Phone', value: phone },
            { name: 'Email', value: email },
            { name: 'Message', value: message },
          ],
        },
      ],
    };

    fetch(process.env.REACT_APP_WEBHOOK_URL, {
      body: JSON.stringify(discordMessage),
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    })



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
  const textColor = useColorModeValue('black', 'white');
  const headingColor = useColorModeValue('black', 'white');

  return (
    <PageTransition>
      <Box p={{ base: 4, md: 8 }}>
        <Flex direction={flexDirection} w="100%" justifyContent="space-between">
          {/* Contact Details */}
          <VStack alignItems="start" flex="1">
            <Heading mb={4} color={headingColor} fontSize="3xl">Contact Details</Heading>
            <Text color={textColor}>Email: scottrperkins@gmail.com</Text>
            <Text color={textColor}>Phone: +64 27 869 0389</Text>
          </VStack>

          {/* Contact Form */}
          <VStack as="form" onSubmit={handleSubmit} spacing={4} w="100%" flex="1" ref={formRef} mt={{ base: 8, md: 0 }}>
            <Heading mb={4} color={headingColor} fontSize="3xl">Get in touch with me</Heading>
            <FormControl id="name">
              <FormLabel color={textColor}>Name</FormLabel>
              <Input type="text" name="name" />
            </FormControl>
            <FormControl id="phone">
              <FormLabel color={textColor}>Phone</FormLabel>
              <Input type="tel" name="phone" />
            </FormControl>
            <FormControl id="email">
              <FormLabel color={textColor}>Email</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl id="message">
              <FormLabel color={textColor}>Message</FormLabel>
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
