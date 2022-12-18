import { Box, Button, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Icon from "../Icon";

export default function DealsCard2({title}){


    return <Flex justify="space-between" w="100%" borderTop="1px solid #202340"align="center" padding={4}>

        <Box>
            <Text fontSize="large" fontWeight="bold">{title}</Text>
            <HStack>
               <Link style={{textDecoration:"underline"}}>See More From Merchant</Link>
            </HStack>
        </Box>
        <VStack gap={4}>
        <Button borderColor="#202340" borderRadius="20px" rightIcon={<Icon image="https://cdn-icons-png.flaticon.com/512/7268/7268615.png" size={16}></Icon>} variant="outline">Get the Deal</Button>
        <Flex justify="space-between">
        <Icon image="https://cdn-icons-png.flaticon.com/512/8977/8977942.png" size={24}> </Icon>
                <Flex justify="end" gap={2}  padding="0px 8px">
                <Icon image="https://cdn-icons-png.flaticon.com/512/646/646094.png" size={24}></Icon>
                <Icon image="https://cdn-icons-png.flaticon.com/512/20/20837.png" size={24}></Icon>
                <Icon image="https://cdn-icons-png.flaticon.com/128/739/739257.png" size={24}></Icon>
                </Flex>

            </Flex>


        </VStack>

    </Flex>
}