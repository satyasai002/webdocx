
import Footer from "@/Components/Footer";
import Labtest from "@/Components/Labtest";
import NavBar from "@/Components/NavBar";
import { Box } from "@chakra-ui/react";
import React from "react";

const LabTest = () => {
  return (
    <Box>
      <NavBar />
      <Labtest/>
      <Footer />
    </Box>
  );
};

export default LabTest;
