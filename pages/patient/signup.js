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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router  = useRouter();
  const Signup = async (e) => {
    e.preventDefault();

    if (email == "" || password == "" || mobile=='' || name == '') {
      toast.error("Input fields can't be empty", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const response = await fetch("https://webdocx.onrender.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, mobile }),
    });
    if (response.status === 201) {
      const data = await response.json();
      console.log(data);
      toast.success("Account created " + name, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("token", data.token);
      router.push("/login");
    } else {
      toast.error("Email already in use !!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Login failed");
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        position={"relative"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
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
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Mobile</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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
              <Stack spacing={10} pt={2}>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                  onClick={Signup}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link
                    color={"red.400"}
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Icon
        width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      >
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
