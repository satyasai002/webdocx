import Doctor from '@/Components/Doctor'
import Feature from '@/Components/Feature'
import Finddoctor from '@/Components/Finddoctor'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Labtest from '@/Components/Labtest'
import NavBar from '@/Components/NavBar'
import Prescriptions from '@/Components/Prescription'
import Stats from '@/Components/Stat'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
  return (
    <Box>
      <NavBar />
      <Hero />
      <Feature />
      <Footer />
    </Box>
  );
}

export default Dashboard