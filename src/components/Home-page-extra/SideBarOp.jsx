import { Flex, Text } from "@chakra-ui/react";
import Icon from "../Icon";

export default function SideBarOp({name}){

    return <Flex  justify="space-between" align="center" cursor="pointer" _hover={{bg:"aliceblue"}} margin="8px" padding={1}>

        <Text fontSize="medium">{name}</Text>
        <Icon image="https://cdn-icons-png.flaticon.com/512/271/271228.png" size={16}></Icon>


    </Flex>

}