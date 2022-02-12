import * as React from 'react';
import Nav from './Components/Nav'
import SeccionPrincipal from './Components/SeccionPrincipal'
import Footer from './Components/Footer'
import Box from '@mui/material/Box';
import './App.css';




const App = () =>{
  return (
    <Box>
    <Nav/>
    <SeccionPrincipal/>
    <Footer/>
    </Box>
  )
}


export default App


