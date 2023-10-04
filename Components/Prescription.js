import React from "react";
import { Box, Text, Container, Heading, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Image } from "@chakra-ui/react";
const prescriptions = [
  {
    id: 1,
    patientName: "John Doe",
    medicines: ["Medicine A", "Medicine B", "Medicine C"],
    date: "2023-10-04",
  },
  {
    id: 1,
    patientName: "John Doe",
    medicines: ["Medicine A", "Medicine B", "Medicine C"],
    date: "2023-10-04",
  },
  {
    id: 1,
    patientName: "John Doe",
    medicines: ["Medicine A", "Medicine B", "Medicine C"],
    date: "2023-10-04",
  },
  {
    id: 1,
    patientName: "John Doe",
    medicines: ["Medicine A", "Medicine B", "Medicine C"],
    date: "2023-10-04",
  },
  {
    id: 1,
    patientName: "John Doe",
    medicines: ["Medicine A", "Medicine B", "Medicine C"],
    date: "2023-10-04",
  },

  // Add more prescription data as needed
];

function Prescriptions() {
  return (
    <Container maxW="7xl" p="10">
      <Heading fontFamily={"Work Sans"} py={10}>
        Patient Medicine Prescriptions
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontFamily={"Work Sans"}
                fontSize={20}
              >
                Joe.D 22-03-2023
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Image
              src="https://www.researchgate.net/publication/345830022/figure/fig4/AS:957640029003789@1605330583881/Sample-prescription-used-as-input-to-the-GUI-developed-in-the-present-work.png"
              w="50%"
              h="50%"
            ></Image>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontFamily={"Work Sans"}
                fontSize={20}
              >
                Jack 04-01-2023
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Image
              src="https://www.researchgate.net/publication/345830022/figure/fig4/AS:957640029003789@1605330583881/Sample-prescription-used-as-input-to-the-GUI-developed-in-the-present-work.png"
              w="50%"
              h="50%"
            ></Image>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default Prescriptions;
