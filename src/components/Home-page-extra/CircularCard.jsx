import { Flex, Image, Text } from "@chakra-ui/react";

export default function CircularCard({image,cat}){


    return <Flex  direction="column">

<Image src={image} borderColor="gray" borderWidth="10px" borderStyle="solid" borderRadius="50%" w="200px" h="200px"></Image>
<Text mt="8px" align="center" fontSize="medium" fontWeight="bold">{cat}</Text>
    </Flex>

}