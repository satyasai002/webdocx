import {
  Avatar,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Button,
  chakra,
  Flex,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

function TestimonialCard(props) {
  const router = useRouter();
  const { date, doctor, slots } = props;
  console.log(date)
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const [selected,setSelected] = useState();
  function AddAppointmentModal() {
    const [name,setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [symptoms, setSymptoms] = useState();
    const arr = ["morning","afternoon","evening"];
    async function createApp() {
      
      const token = await localStorage.getItem("token");
      if (token != null) {
        const data = {
          doctor: doctor,
          shift: arr[selected],
          date: new Date(date),
          patient: {
            name: name,
            age: age,
            gender: gender,
          },
          symptoms: symptoms,
        };
        console.log(data)
        const response = await fetch(
          "https://webdocx.onrender.com/user/appointment/create",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (response.status === 201) {
          const res = await response.json();
          router.reload();
        } else {
          console.error("request failed");
        }
      }
    }
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Appointment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column" gap={4}>
                <Input
                  placeholder="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Input>
                <Input
                  type="number"
                  placeholder="age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                ></Input>
                <Input
                  placeholder="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                ></Input>
                <Input
                  placeholder="symptoms"
                  onChange={(e) => {
                    setSymptoms(e.target.value);
                  }}
                ></Input>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} onClick={createApp}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Avatar
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcx3Lf6QurVa-76CIXGJLtW_lzWd62ornoA&usqp=CAU"
        }
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "35px 0 0 0", md: "0 50px 0 0" }}
      />
      <Flex direction={"column"} textAlign={"left"} gap={2}>
        <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
          {doctor.name}
          <chakra.span
            fontFamily={"Inter"}
            fontWeight={"medium"}
            color={"gray.500"}
          >
            - {`"${doctor.speciality}"`}
          </chakra.span>
        </chakra.p>
        <Text fontFamily={"Work Sans"}>Time to Meet :</Text>
        <Flex direction="row" gap={3}>
          <Button
            isDisabled={slots.morning === 0 ? true : false}
            colorScheme={selected === 0 ? "green" : "red"}
            variant="outline"
            onClick={() => {
              setSelected(0);
            }}
          >
            {`Morning (${slots.morning})`}
          </Button>
          <Button
            isDisabled={slots.afternoon === 0 ? true : false}
            colorScheme={selected === 1 ? "green" : "red"}
            variant="outline"
            onClick={() => {
              setSelected(1);
            }}
          >
            {`Afternoon (${slots.afternoon})`}
          </Button>
          <Button
            isDisabled={slots.evening === 0 ? true : false}
            colorScheme={selected === 2 ? "green" : "red"}
            variant="outline"
            onClick={() => {
              setSelected(2);
            }}
          >
            {`Evening (${slots.evening})`}
          </Button>
        </Flex>
        <Button bg="red.400" mt="3" onClick={onOpen}>
          Submit
        </Button>
      </Flex>
      <AddAppointmentModal />
    </Flex>
  );
}

export default function Doctor() {
  const [data,setData] = useState();
  const [date,setDate] = useState(null);
  const router = useRouter();
  async function getData(e) {
    setDate(e);
    const token = await localStorage.getItem("token");
    if (token != null) {
      const response = await fetch(
        "https://webdocx.onrender.com/user/appointment/check",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: new Date(e) }),
        }
      );
      if (response.status === 200) {
        const res = await response.json();
        setData(res);
      } else {
        console.error("Login failed");
      }
    }
    else{
      router.push("/login");
    }
  }
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Flex flexDirection="row-reverse" px={20}>
        <Input
          type="date"
          w="30%"
          onChange={(e) => {
            getData(e.target.value);
          }}
        ></Input>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mb={16}
        mx={"auto"}
      >
        {date===null && (<Text fontSize={25}>Select Date ......</Text>) }
        {data?.map((cardInfo, index) => (
          <TestimonialCard key={index} date={date} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      
    </Flex>
  );
}