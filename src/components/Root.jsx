import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { AnimatePresence } from 'framer-motion';

const Root = () => {
  return (
    <Box>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Outlet />
      </AnimatePresence>
    </Box>
  );
};

export default Root;
