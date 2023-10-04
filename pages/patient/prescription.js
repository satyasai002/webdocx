import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Prescriptions from "@/Components/Prescription";
import { Box } from "@chakra-ui/react";
import React from "react";

const Prescription = () => {
  return (
    <Box>
      <NavBar />
      <Prescriptions />
      <Footer />
    </Box>
  );
};

export default Prescription;
