
import Footer from "@/Components/Footer";
import Labtest from "@/Components/Labtest";
import NavBar from "@/Components/NavBar";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const LabTest = () => {
  const router = useRouter();
  const [data,setData] = useState();
  useEffect(()=>{
     getData();
  },[])
  const getData = async()=>{
    const token = localStorage.getItem("token");
    if(token){
      const response = await fetch(
        "https://webdocx.onrender.com/user/test/get",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const res = await response.json();
        setData(res.data);
    }
    else{
        router.push('/login');
    }
  }
}
  return (
    <Box>
      <NavBar />
      <Labtest data={data}/>
      <Footer />
    </Box>
  );
};

export default LabTest;
