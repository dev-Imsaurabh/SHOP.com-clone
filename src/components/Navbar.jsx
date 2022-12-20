import "./cstyles.css";
import { Box, Flex, Image,Button } from "@chakra-ui/react";

import logo from "../assets/logo.svg";
import Searchbar from "./Searchbar";

import Icon from "./Icon";
import SideBar from "./SideBar";
import NavLinks from "./NavLinks";
import NavControlPanel from "./NavControlPanel";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Api from "../api/Api";



export default function Navbar({ navList }) {
  

    const nav = useNavigate()

   


  return (
    <Box className="navbar">
      <Flex align={{base:"start",lg:"center"}} gap={{base:4,lg:40}} direction={{base:"column",lg:"row"}} >
        <Image _hover={{cursor:"pointer"}} onClick={()=>{
            nav("/")
        }} src={logo} width={120} ml={8}></Image>
        <Searchbar />
      </Flex>
      <Flex direction={{base:"column-reverse",lg:"row"}} gap={{base:2,lg:20}} justify={{base:"space-around",lg:"space-between"}}>
        <SideBar />
        <NavLinks/>
        <NavControlPanel/>
        
      </Flex>
    </Box>
  );
}
