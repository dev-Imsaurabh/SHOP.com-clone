import "./cstyles.css";
import { Box, Flex, Image,Button } from "@chakra-ui/react";

import logo from "../assets/logo.svg";
import Searchbar from "./Searchbar";

import Icon from "./Icon";
import SideBar from "./SideBar";
import NavLinks from "./NavLinks";
import NavControlPanel from "./NavControlPanel";
import { useNavigate } from "react-router-dom";


export default function Navbar({ navList }) {
    
    const nav = useNavigate()

  return (
    <Box className="navbar">
      <Flex align="center" gap={40}>
        <Image _hover={{cursor:"pointer"}} onClick={()=>{
            nav("/")
        }} src={logo} width={120} ml={8}></Image>
        <Searchbar />
      </Flex>
      <Flex gap={20} justify="space-between">
        <SideBar />
        <NavLinks/>
        <NavControlPanel />
        
      </Flex>
    </Box>
  );
}
