import {
    Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Head from "next/head";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    setContactDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    console.table(contactDetails);
  };
  return (
    <Box>
        <NavBar/>
      <Head>
        <title>CMC Hospitals</title>
      </Head>
      <Container maxW="container.xl" p={3} my={4}>
        <Center>
          <Flex
            bgColor="red.400"
            rounded="lg"
            direction={{ base: "column-reverse", lg: "row" }}
            justifyContent="between"
            alignItems="center"
            py="2"
            px={{ base: 4, lg: 8 }}
            gap={{ base: 1, lg: 6 }}
            boxShadow="xl"
          >
            <Flex
              direction="column"
              gap={3}
              alignItems="center"
              justifyContent="center"
              fontFamily="'Roboto'"
              w="100%"
            >
              <Heading color="black" fontSize={{ base: "4xl", lg: "5xl" }}>
                Contact Us
              </Heading>
              <Flex direction="column" gap={1} w="100%">
                <Text as="label" fontWeight="semibold" htmlFor="firstName">
                  Your Name
                </Text>
                <Flex gap="4" direction={{ base: "column", md: "row" }}>
                  <Input
                    boxShadow="md"
                    required
                    fontWeight="light"
                    placeholder="First Name"
                    rounded="full"
                    bg="white"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                  />
                  <Input
                    boxShadow="md"
                    required
                    fontWeight="light"
                    placeholder="Last Name"
                    rounded="full"
                    bg="white"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                  />
                </Flex>
              </Flex>
              <Flex direction="column" gap={1} w="100%">
                <Text as="label" fontWeight="semibold" htmlFor="email">
                  Email Address
                </Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" px={2} ml={1}>
                    {/* <IoIosMail color="gray" size="md" /> */}
                  </InputLeftElement>
                  <Input
                    boxShadow="md"
                    pl={10}
                    required
                    fontWeight="light"
                    placeholder="Email"
                    rounded="full"
                    bg="white"
                    name="email"
                    type="email"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Flex>
              <Flex direction="column" gap={1} w="100%">
                <Text as="label" fontWeight="semibold" htmlFor="email">
                  Message
                </Text>
                <Input
                  boxShadow="md"
                  fontWeight="light"
                  py={2}
                  px={3}
                  placeholder="Please enter your comments... "
                  rounded="xl"
                  bg="white"
                  name="comment"
                  type="text"
                  as="textarea"
                  h="120px"
                  onChange={handleChange}
                />
              </Flex>
              <Button
                boxShadow="lg"
                mb={4}
                mt={2}
                bg="black"
                color="white"
                fontWeight="light"
                whileHover={{ scale: 1.1, backgroundColor: "#2FDD92" }}
                whileTap={{ scale: 0.9 }}
                size="lg"
                px={12}
                rounded="full"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Flex>
            <Image
              src="/contact-us.svg"
              alt="contact"
              layout="fixed"
              w={{ base: "320px", lg: "600px" }}
            />
          </Flex>
        </Center>
      </Container>
      <Footer/>
    </Box>
  );
};

export default Contact;
