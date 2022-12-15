import { Box, color, Image, Text,Button } from "@chakra-ui/react";

import RatingBar from "./Home-page-extra/RatingBar";
import Icon from "./Icon";

export default function ProductCard({image,ratings,price,delivery,name,category}){

    

    return <Box w="300px" bg="white" padding={3}> 

        <Image w="100%" src={image}></Image>
        <Text fontSize="medium" noOfLines={1}>{name}</Text>
        <Text fontSize="small" fontWeight="bold">${price.toFixed(2)}</Text>
        <Text fontSize="small">{delivery} <Button bg="white" _hover={{bg:"white"}} leftIcon={<Icon  image={"https://img.shop.com/Image/resources/images/cashback-icon.svg"} w="100%" size={16}/>} >Cashback</Button></Text>
        <RatingBar color="gold" size={16}  count={ratings}/>
        <Text color="teal" fontSize="small">Free shiping with $99 orders</Text>

    </Box>


}