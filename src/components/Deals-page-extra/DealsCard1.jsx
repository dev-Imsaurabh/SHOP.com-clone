import { Button, Card,CardBody, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Icon from "../Icon";

export default function DealsCard1({image,title,desc}){

    return <Card padding={2}>
        <CardBody p={0}>
            <Flex h="100%" justify="space-between" direction="column">
            <Flex >

                <VStack width="40%">
                    <Image w="100%" src={image} atl={title}></Image>
                </VStack>

                <VStack width="60%" gap={4}>
                    <Text fontSize="large">{title}</Text>
                    <Button borderColor="#202340" borderRadius="20px" rightIcon={<Icon image="https://cdn-icons-png.flaticon.com/512/7268/7268615.png" size={16}></Icon>} variant="outline">Get the Deal </Button>
                </VStack>

            </Flex>
            <Flex direction="column" justify="space-between" >
            <Text m="8px">{desc}</Text>

<Flex w="100%" justify="space-between" align="center" bg="#f55a4d" >
    <Text padding="0px 8px" color="white">Feature</Text>
<Flex justify="end" gap={2} padding="0px 8px">
    <Icon image="https://cdn-icons-png.flaticon.com/512/646/646094.png" size={32}></Icon>
    <Icon image="https://cdn-icons-png.flaticon.com/512/20/20837.png" size={32}></Icon>
    <Icon image="https://cdn-icons-png.flaticon.com/128/739/739257.png" size={32}></Icon>
</Flex>

</Flex>

            </Flex>
            </Flex>
        </CardBody>
    </Card>
}