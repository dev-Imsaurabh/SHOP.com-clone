import { Box, Flex, Image, Text,Button } from "@chakra-ui/react";
import Icon from "../Icon";

export default function ImageCard({image,t1,t2,cbtn}){

    return <Flex direction="column" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} justifyContent="space-between">

        <Image src={image}></Image>
        <Text align="center" fontWeight="bold" fontSize="medium">{t1}{cbtn?<Button bg="white" _hover={{bg:"white"}} leftIcon={<Icon  image={"https://img.shop.com/Image/resources/images/cashback-icon.svg"} size={16}/>} >Cashback</Button>:""}</Text>
        <Text fontSize="small" align="center">{t2}</Text>

    </Flex>
}