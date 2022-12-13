import { Flex, Image, Text } from "@chakra-ui/react";

export default function RectangularCard({image,cat}){
    return <Flex  direction="column">
<Text mt="8px" align="center" fontSize="medium" fontWeight="bold">{cat}</Text>

<Image src={image} w="250px" h="280px"></Image>
    </Flex>

}