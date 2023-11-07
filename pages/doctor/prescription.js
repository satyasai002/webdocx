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
  Flex,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DocNavBar from "@/Components/DocNavBar";

function TestimonialCard(props) {
  const router = useRouter();
  const { date, data } = props;
  const {
    isOpen: isPresOpen,
    onOpen: onPresOpen,
    onClose: onPresClose,
  } = useDisclosure();
  const {
    isOpen: isTestOpen,
    onOpen: onTestOpen,
    onClose: onTestClose,
  } = useDisclosure();
  function AddPrescriptionModal() {
    const [medicineCount, setMedicineCount] = useState(1);
    const [current, setCurrent] = useState(1);
    const [description, setDescription] = useState();
    const [diagnosis, setDiagnosis] = useState();
    const [remarks, setRemarks] = useState();
    const [medicines, setMedicines] = useState([
      { name: "", dosage: 0, duration: 0, instruction: "" },
    ]);

    const handleMedicineCountChange = (count) => {
      setMedicineCount(count);
      const newMedicines = Array.from({ length: count }, () => ({
        name: "",
        dosage: "",
        duration: "",
        instruction: "",
      }));
      setMedicines(newMedicines);
    };

    const handleMedicineChange = (index, field, value) => {
      const updatedMedicines = [...medicines];
      updatedMedicines[index][field] = value;
      setMedicines(updatedMedicines);
      console.log(medicines);
    };
    async function createPres() {
      const token = await localStorage.getItem("docToken");
      if (token != null) {
        const setData = {
          doctor: data.doctor,
          user: data.user,
          patient: data.patient,
          symptoms: data.symptoms,
          description: description,
          diagnosis: diagnosis,
          medicines: medicines,
          remarks: remarks,
        };
        console.log(data);
        const response = await fetch(
          "https://webdocx.onrender.com/doctor/prescription/create",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(setData),
          }
        );
        if (response.status === 200) {
          const res = await response.json();
          router.reload();
        } else {
          console.error("request failed");
        }
      }
    }
    return (
      <>
        <Modal isOpen={isPresOpen} onClose={onPresClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Prescription</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column" gap={4}>
                <form>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                      type="text"
                      name="description"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Diagnosis</FormLabel>
                    <Input
                      type="text"
                      name="diagnosis"
                      onChange={(e) => {
                        setDiagnosis(e.target.value);
                      }}
                    />
                  </FormControl>
                  <Flex direction={"row"} gap={1}>
                    <FormControl>
                      <FormLabel>Medicine</FormLabel>
                      <Select onChange={(e) => setCurrent(e.target.value)}>
                        {Array.from({ length: medicineCount }, (_, i) => (
                          <option key={i} value={i + 1}>
                            Medicine {i + 1}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl w="40%">
                      <FormLabel>No of Meds</FormLabel>
                      <Input
                        type="number"
                        value={medicineCount}
                        onChange={(e) => {
                          handleMedicineCountChange(e.target.value);
                        }}
                      />
                    </FormControl>
                  </Flex>

                  <Stack spacing={4} p={3}>
                    <Box>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        name={`medicines[${current - 1}][name]`}
                        value={medicines[current - 1]?.name}
                        onChange={(e) =>
                          handleMedicineChange(
                            current - 1,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <FormLabel>Dosage</FormLabel>
                      <Input
                        type="number"
                        name={`medicines[${current - 1}][dosage]`}
                        value={medicines[current - 1]?.dosage}
                        onChange={(e) =>
                          handleMedicineChange(
                            current - 1,
                            "dosage",
                            e.target.value
                          )
                        }
                      />
                      <FormLabel>Duration</FormLabel>
                      <Input
                        type="number"
                        name={`medicines[${current - 1}][duration]`}
                        value={medicines[current - 1]?.duration}
                        onChange={(e) =>
                          handleMedicineChange(
                            current - 1,
                            "duration",
                            e.target.value
                          )
                        }
                      />
                      <FormLabel>Instruction</FormLabel>
                      <Input
                        type="text"
                        name={`medicines[${current - 1}][instruction]`}
                        value={medicines[current - 1]?.instruction}
                        onChange={(e) =>
                          handleMedicineChange(
                            current - 1,
                            "instruction",
                            e.target.value
                          )
                        }
                      />
                    </Box>
                  </Stack>
                  <FormControl>
                    <FormLabel>Remarks</FormLabel>
                    <Input
                      type="text"
                      name="remarks"
                      onChange={(e) => {
                        setRemarks(e.target.value);
                      }}
                    />
                  </FormControl>
                </form>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onPresClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} onClick={createPres}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  function AddTestModal() {
    const [testCount, setTestCount] = useState(1);
    const [current, setCurrent] = useState(1);
    const [tests, setTests] = useState([{ name: "", instructions: "" }]);

    const handleTestCountChange = (count) => {
      setTestCount(count);
      const newTests = Array.from({ length: count }, () => ({
        name: "",
        instructions: "",
      }));
      setTests(newTests);
    };

    const handleTestChange = (index, field, value) => {
      const updatedTests = [...tests];
      updatedTests[index][field] = value;
      setTests(updatedTests);
      console.log(tests);
    };
    async function createTest() {
      const token = await localStorage.getItem("docToken");
      if (token != null) {
        const setData = {
          patient: data.user,
          tests: tests,
        };
        console.log(setData);
        const response = await fetch(
          "https://webdocx.onrender.com/doctor/labs/create",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(setData),
          }
        );
        if (response.status === 200) {
          const res = await response.json();
          router.reload();
        } else {
          console.error({
            msg: "request failed",
            error: response.json(),
          });
        }
      }
    }
    return (
      <>
        <Modal isOpen={isTestOpen} onClose={onTestClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Tests</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column" gap={4}>
                <form>
                  <Flex direction={"row"} gap={1}>
                    <FormControl>
                      <FormLabel>Test</FormLabel>
                      <Select onChange={(e) => setCurrent(e.target.value)}>
                        {Array.from({ length: testCount }, (_, i) => (
                          <option key={i} value={i + 1}>
                            Test {i + 1}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl w="40%">
                      <FormLabel>No of Tests</FormLabel>
                      <Input
                        type="number"
                        value={testCount}
                        onChange={(e) => {
                          handleTestCountChange(e.target.value);
                        }}
                      />
                    </FormControl>
                  </Flex>

                  <Stack spacing={4} p={3}>
                    <Box>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        name={`tests[${current - 1}][name]`}
                        value={tests[current - 1]?.name}
                        onChange={(e) =>
                          handleTestChange(current - 1, "name", e.target.value)
                        }
                      />
                      <FormLabel>Instruction</FormLabel>
                      <Input
                        type="text"
                        name={`tests[${current - 1}][instructions]`}
                        value={tests[current - 1]?.instructions}
                        onChange={(e) =>
                          handleTestChange(
                            current - 1,
                            "instructions",
                            e.target.value
                          )
                        }
                      />
                    </Box>
                  </Stack>
                </form>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onTestClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} onClick={createTest}>
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
      <Flex direction={"column"} textAlign={"left"} gap={2}>
        <Flex direction="row" gap={3} alignItems="center">
          <Text fontFamily={"Work Sans"} fontSize={20}>
            Name :
          </Text>
          <Text fontFamily={"Work Sans"} fontSize={20}>
            {data.patient.name}
          </Text>
        </Flex>
        <Flex direction="row" gap={3} alignItems="center">
          <Text fontFamily={"Work Sans"} fontSize={20}>
            Age :
          </Text>
          <Text fontFamily={"Work Sans"} fontSize={20}>
            {data.patient.age}
          </Text>
        </Flex>
        <Flex direction="row" gap={3} alignItems="center">
          <Text fontFamily={"Work Sans"} fontSize={20}>
            Gender :
          </Text>
          <Text fontFamily={"Work Sans"} fontSize={20}>
            {data.patient.gender}
          </Text>
        </Flex>
        <Flex direction="row" gap={3} alignItems="center">
          <Text fontFamily={"Work Sans"} fontSize={20}>
            slot :
          </Text>
          <Text fontFamily={"Work Sans"} fontSize={20}>
            {data.shift}
          </Text>
        </Flex>
        <Flex flexDirection={"row"} gap={2}>
          <Button bg="red.400" mt="3" onClick={onPresOpen}>
            Add Prescription
          </Button>
          <Button bg="red.400" mt="3" onClick={onTestOpen}>
            Add Tests
          </Button>
        </Flex>
      </Flex>
      <AddPrescriptionModal />
      <AddTestModal />
    </Flex>
  );
}

export default function Doctor() {
  const [data, setData] = useState();
  const [date, setDate] = useState(null);
  async function getData(e) {
    setDate(e);
    const token = await localStorage.getItem("docToken");
    if (token != null) {
      const response = await fetch(
        "https://webdocx.onrender.com/doctor/appointment/get",
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
        setData(res.data);
      } else {
        console.error("request failed");
      }
    }
  }
  return (
    <Box>
      <DocNavBar />
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
          columns={{ base: 1, xl: 3 }}
          spacing={"20"}
          mt={16}
          mb={16}
          mx={"auto"}
        >
          {date === null && <Text fontSize={25}>Select Date ......</Text>}
          {data?.map((cardInfo, index) => (
            <TestimonialCard
              key={index}
              date={date}
              data={cardInfo}
              index={index}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
