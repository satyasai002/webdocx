import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Icon,
  useBreakpointValue,
  Progress,
} from "@chakra-ui/react";
import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
function Form1({HandleChange}){
   
    return (
      <>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up Form 1
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Date of birth</FormLabel>
                  <Input type="date" />
                </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    //   type={showPassword ? "text" : "password"}
                    type="password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Flex
                pt={4}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
                <Button
                  onClick={() => {
                    HandleChange(2);
                  }}
                  fontFamily={"heading"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  {" "}
                  Next
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </>
    );
}
function Form2({HandleChange}) {
  return (
    <>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Address</FormLabel>
              <Input type="text" />
            </FormControl>
            <Box>
              <FormControl id="lastName" isRequired>
                <FormLabel>Mobile</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <HStack>
              <Box>
                <FormControl id="email" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="email" isRequired>
                  <FormLabel>State</FormLabel>
                  <Input />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Pin code</FormLabel>
                  <Input />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Country</FormLabel>
                  <Input />
                </FormControl>
              </Box>
            </HStack>

            <HStack pt={2} justifyContent={"space-between"}>
              <Button
                onClick={() => {
                  HandleChange(1);
                }}
                fontFamily={"heading"}
                mt={8}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                {" "}
                Back
              </Button>
              <Button
                onClick={() => {
                  HandleChange(3);
                }}
                fontFamily={"heading"}
                mt={8}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                {" "}
                Next
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
function Form3({HandleChange}) {
  return (
    <>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Qualification</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Speciality</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Experience</FormLabel>
                  <InputGroup>
                    <Input type="number" />
                    <InputRightElement>
                      <Text bg="gray.300" p="2" borderRadius={"0 5px 5px 0"}>
                        Yrs
                      </Text>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Registration number</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>License</FormLabel>
              <Input type="file" />
            </FormControl>
            <HStack pt={2} justifyContent={"space-between"}>
              <Button
                onClick={() => {
                  HandleChange(2);
                }}
                fontFamily={"heading"}
                mt={8}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                {" "}
                Back
              </Button>
              <Button
                fontFamily={"heading"}
                mt={8}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                Signup
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
export default function SignupCard() {
  const [stage,setStage] = useState(1);
 
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        {stage === 1 ? (
          <Form1 HandleChange={setStage} />
        ) : stage === 2 ? (
          <Form2 HandleChange={setStage} />
        ) : (
          <Form3 HandleChange={setStage} />
        )}
      </Flex>
    </>
  );
}
