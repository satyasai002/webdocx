import { useRef } from "react";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  HStack,
  Link,
  Button,
  Avatar,
  useDisclosure,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiHomeHeart, BiTrip } from "react-icons/bi";
import { GrGallery, GrContact } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  { name: "Find Doctor", href: "./finddoctor", icon: <BiHomeHeart /> },
  { name: "Lab Test", href: "./labtests", icon: <BiTrip /> },
  { name: "Prescription", href: "./prescription", icon: <GrGallery /> },
  { name: "Contact Us", href: "./contactus", icon: <GrContact /> },
];

const LinkItem = ({ href, children }) => (
  <Link
    href={href}
    fontSize="16px"
    fontFamily="'Roboto'"
    color="black"
    _hover={{ color: "color5" }}
    _active={{ color: "color5" }}
    fontWeight="normal"
  >
    {children}
  </Link>
);



const NavBar = () => {
  return (
    <Flex flexDirection="column">
      <Box
        as={motion.div}
        py={{ base: 3, md: 4 }}
        px={{ base: 4, md: 8, lg: 32 }}
        align="center"
        display="block"
        w="100vw"
        bg="rgba(255,255,255,1)"
        opacity="0.8"
        backdropFilter="saturate(180%) blur(5px)"
        boxShadow="xl"
        whileHover={{
          opacity: [0.8, 1],
          transition: { duration: 1 },
        }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          as={motion.div}
          animate={{ y: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 3, delay: 3, ease: "linear" }}
        >
          <Link cursor={"pointer"} style={{ textDecoration: "none" }} href="./dashboard">
            <Heading as="h4" fontSize="24px" color="red.500">
              CMC Hospitals
            </Heading>
          </Link>

          <Spacer />
          <HStack
            gap={{ base: 4, lg: 8 }}
            display={{ base: "none", md: "flex" }}
          >
            {links.map(({ name, href }) => (
              <LinkItem key={name} href={href}>
                {name}
              </LinkItem>
            ))}
          </HStack>

          <Avatar
            icon={<FaRegUserCircle />}
            color="color5"
            bg="white"
            w="25px"
            h="25px"
            ml={8}
            mr={4}
            size="lg"
            _hover={{ color: "red.400" }}
            cursor="pointer"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavBar;
