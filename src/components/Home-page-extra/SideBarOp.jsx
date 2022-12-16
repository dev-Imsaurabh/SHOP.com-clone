import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";

export default function SideBarOp({name,close}){

    let nav = useNavigate()
    return <Flex onClick={()=>{
        nav(process.env.REACT_APP_PRODUCTS+"/"+name.replace(" ","").toLowerCase())
        close()
    }}  justify="space-between" align="center" cursor="pointer" _hover={{bg:"aliceblue"}} margin="8px" padding={1}>

        <Text fontSize="medium">{name}</Text>
        <Icon image="https://cdn-icons-png.flaticon.com/512/271/271228.png" size={16}></Icon>


    </Flex>

}