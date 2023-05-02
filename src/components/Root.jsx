import { Box } from "@chakra-ui/react";
import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';

const Root = () =>{
    return (
        <Box>
            <Navbar/>
            {/*Put something here as an intro screen? with buttons to each other page */}
            <Outlet/>
        </Box>
    )
}

export default Root