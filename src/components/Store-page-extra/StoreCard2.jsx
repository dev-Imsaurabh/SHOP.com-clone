import { Box, Button, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import Icon from "../Icon";

export default function StoreCard2({title}){


    return <Flex justify="space-between" w="100%" borderTop="1px solid #202340"align="center" padding={4}>

        <Box>
            <Text fontSize="large" fontWeight="bold">{title}</Text>
            <HStack>
                <Icon image="https://cdn-icons-png.flaticon.com/512/3275/3275100.png" size={16}></Icon>
                <Text>Hot Deals</Text>
            </HStack>
        </Box>
        <Box>
        <HStack>
              <Text fontSize="small">Up to 2.00%</Text>
                <Icon image="https://img.shop.com/Image/resources/images/cashback-icon.svg" size={16}></Icon>
                <Text fontSize="small">Cashback</Text>
            </HStack>
        </Box>
        <VStack gap={4}>
        <Button borderColor="#202340" borderRadius="20px" rightIcon={<Icon image="https://cdn-icons-png.flaticon.com/512/7268/7268615.png" size={16}></Icon>} variant="outline">Visit Partner Store </Button>
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