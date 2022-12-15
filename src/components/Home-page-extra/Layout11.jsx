import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../../api/Api";
import Icon from "../Icon";
import ProductSlider from "../ProductSlider";
import ImageCard from "./ImageCard";



export default function Layout11(){

    const [d1,setd1]=useState([])
 

  useEffect(()=>{
   const perform=async()=>{
    let api = new Api()
    
  setd1(await api.getProductsData(process.env.REACT_APP_JWELERY))
   }
   perform()
  },[])

    return <Flex m="32px" mt="0px"  gap={10} padding="16px 32px" bg="white">

        <Image src="https://img.shop.com/Image/homepage/layered-usa-104750-holiday-collection-banner-bgsq1668531326212.jpg" w="400px" h="400px"></Image>
        <Box w="70%">
        {d1.length!=0&&<ProductSlider data={d1} count={3}/>}

        </Box>

        
    </Flex>
}