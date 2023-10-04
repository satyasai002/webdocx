import { Box, Container, Flex, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Test = [
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Diabetes.png?tr=w-100,q-80,f-webp,c-at_max",
    name: "Diabetes",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Covid.png?tr=w-100,q-60,f-webp,c-at_max",
    name: "Covid 19",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Bone.png?tr=w-100,q-60,f-webp,c-at_max",
    name: "Bone",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Liver_0.png?tr=w-100,q-60,f-webp,c-at_max",
    name: "Hepatitis Screening",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Lungs_1.png?tr=w-100,q-60,f-webp,c-at_max",
    name: "Lungs",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Kidney_1.png?tr=w-100,q-60,f-webp,c-at_max",
    name: "Kidney",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Thyroid_1.png?tr=w-100,q-80,f-webp,c-at_max",
    name: "Thyroid",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Full_Body_Checkup.png?tr=w-100,q-80,f-webp,c-at_max",
    name: "Full Body",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Joint_Pain_1.png?tr=w-100,q-80,f-webp,c-at_max",
    name: "Joint Pain",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Heart.png?tr=w-100,q-80,f-webp,c-at_max",
    name: "Heart",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Kidney_1.png?tr=w-100,q-60,f-webp,c-at_max",
    name: "Lipid Profile",
  },
  {
    img: "https://images.apollo247.in/pd-cms/cms/2023-07/Kidney_1.png?tr=w-100,q-60,f-webp,c-at_max",
    name: "Electrolytes - Serum",
  },
  {
    img: "https://images.apollo247.in/images/diagnostics/App/Items/Test/Blood_Studies.png?tr=w-180,q-80,f-webp,c-at_max",
    name: "CBC",
  },
];
const Labtest = () => {
  return (
    <Container maxW={"7xl"}>
      <VStack
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        textAlign="left"
      >
        <Box>
          <Flex direction="column" gap="1">
            <Text fontFamily={"Work Sans"} fontSize={25}>
              Doctor Created Health Checks (6)
            </Text>
            <Container maxW={"9xl"} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 7 }} spacing={10}>
                {Test.slice(0, 6).map(
                  (test, index) => {
                    return (
                      <Flex
                        direction="row"
                        p="2"
                        gap={1}
                        border="1px"
                        borderColor="gray.300"
                        borderRadius={10}
                        justifyItems="center"
                        justifyContent="center"
                        alignItems="center"
                        minW={"100px"}
                      >
                        <Image
                          src={test.img}
                          height={"40px"}
                          width={"40px"}
                        ></Image>
                        <Text fontFamily={"Work Sans"} fontSize={15}>
                          {test.name}
                        </Text>
                      </Flex>
                    );
                  }
                )}
              </SimpleGrid>
            </Container>
          </Flex>
        </Box>
        <Box>
          <Flex direction="column" gap="1">
            <Text fontFamily={"Work Sans"} fontSize={25}>
              Top Booked Test
            </Text>
            <Container maxW={"9xl"} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 7 }} spacing={10}>
                {Test.map((test, index) => {
                  return (
                    <Flex
                      direction="row"
                      p="2"
                      gap={1}
                      border="1px"
                      borderColor="gray.300"
                      borderRadius={10}
                      justifyItems="center"
                      justifyContent="center"
                      alignItems="center"
                      minW={"100px"}
                    >
                      <Image
                        src={test.img}
                        height={"40px"}
                        width={"40px"}
                      ></Image>
                      <Text fontFamily={"Work Sans"} fontSize={15}>
                        {test.name}
                      </Text>
                    </Flex>
                  );
                })}
              </SimpleGrid>
            </Container>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
}

export default Labtest