import { Box, Button, Divider, Flex, HStack, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import footer from "../assets/footer.png"


export default function Footer(){


    return <Box>

        <Flex bg="#202340"  padding="8px 16px" direction={{base:"column",lg:"row"}}>

            <Flex w={{base:"100%",lg:"50%"}} justify="start" align="baseline" gap={4} direction={{base:"column",lg:"row"}}>

                <Text color="white">Get Email Deals & Earn Cashback</Text>
                <Flex h="35px" w="300px"  bg="white" >
                    <Input w="80%" placeholder="Enter email address..." borderWidth="0px" borderRadius="0px"></Input>
                    <Button borderWidth="0px" borderRadius="0px" w="20%"> Sign Up </Button>
                </Flex>

            </Flex>

            <Flex w={{base:"100%",lg:"50%"}} justify="end"  direction={{base:"column",lg:"row"}}align="baseline" gap={4}>
            <Text mt={{base:"16px"}} color="white">Link To This Page & Tell All Your Friends!</Text>
            <Button  h="30px" borderWidth="1px" rightIcon={<Icon image="https://cdn-icons-png.flaticon.com/512/126/126498.png" size={12}></Icon>} borderRadius="30px" w={{base:"100%",lg:"20%"}}>Copy Link</Button>

            </Flex>



        </Flex>
        <Divider />
        <Flex bg="#202340" padding={1} direction={{base:"column",lg:"row"}}>
            <Flex w={{base:"100%",lg:"70%"}} gap={2} align="center" direction={{base:"column",lg:"row"}}>
                <Text fontSize="small" color="white" padding="4px" borderRight={{lg:"1px solid white"}}>About Us</Text>
                <Text fontSize="small" color="white" padding="2px" borderRight={{lg:"1px solid white"}}>Help</Text>
                <Text fontSize="small" color="white" padding="2px" borderRight={{lg:"1px solid white"}}>Accessbility Statement</Text>
                <Text fontSize="small" color="white" padding="2px" borderRight={{lg:"1px solid white"}}>Contact Us</Text>
                <Text fontSize="small" color="white" padding="2px" borderRight={{lg:"1px solid white"}}>Partner With Us</Text>
                <Text fontSize="small" color="white" padding="2px" borderRight={{lg:"1px solid white"}}>Services</Text>
                <Text fontSize="small" color="white" padding="2px" borderRight={{lg:"1px solid white"}}>Country/Region</Text>
                <Text fontSize="small" color="white" padding="2px" borderRight={{lg:"1px solid white"}}>Connect</Text>
                <Text fontSize="small" color="white" padding="2px">Own You Own SHOP Site</Text>

            </Flex>

            <Flex  w={{base:"100%",lg:"30%"}} justify={{base:"space-around",lg:"end"}} gap={4} align="center">

                <Icon image="https://cdn-icons-png.flaticon.com/512/552/552486.png" size={48}></Icon>
                <Icon image="https://cdn-icons-png.flaticon.com/512/3670/3670124.png"  size={48}></Icon>
                <Icon image="https://cdn-icons-png.flaticon.com/512/3670/3670127.png"  size={48}></Icon>
                <Icon image="https://cdn-icons-png.flaticon.com/512/1377/1377257.png"  size={48}></Icon>

                

            </Flex>
        </Flex>
        <Text padding={1} fontSize="small" color="#202340">
© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.<br/>Only Customers will receive cashback on qualifying purchases. UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases
</Text>
<HStack padding={1} gap={2}>
    <Link   style={{borderRight:"1px solid #202340",textDecoration:"underline",padding:"2px",fontSize:"12px"}}>Privacy Policy</Link>
    <Link  style={{borderRight:"1px solid #202340",textDecoration:"underline",padding:"2px",fontSize:"12px"}}>Terms of Use</Link>
    <Link  style={{borderRight:"1px solid #202340",textDecoration:"underline",padding:"2px",fontSize:"12px"}}>Advertising Disclosure</Link>
    <Link  style={{borderRight:"1px solid #202340",textDecoration:"underline",padding:"2px",fontSize:"12px"}}>Return Policy</Link>
    <Link  style={{textDecoration:"underline",padding:"2px",fontSize:"12px"}}>Shipping Information</Link>
</HStack>
<Divider />
<Flex justify="center" align="center" gap={4} marginTop="30px" direction={{base:"column",lg:"row"}}>
    <Image w="100px" h="100px" src="https://img.shop.com/Image/images/ir/Shop-ranks-19-in-newsweek-circle.png"></Image>
    <Image w="100px" h="100px" src="https://img.shop.com/Image/images/ir/DC360_2022_rank_10_top_500_primary_merch_category.png"></Image>
    <Image w="100px" h="100px" src="https://img.shop.com/Image/images/ir/DC360_2022_rank_55_top_100.png"></Image>
    <Image w="100px" h="100px" src="https://img.shop.com/Image/images/ir/DC360_2022_rank_80_top_500_and_1000.png"></Image>
    <Image w="100px" h="100px" src="https://img.shop.com/Image/images/ir/Shop-ranks-13-in-NC-circle.png"></Image>
    <Image w="100px" h="100px" src="https://img.shop.com/Image/images/ir/commonwealth_2022_rank_22_top_2000_tw_english.png"></Image>
    <Image w="100px" h="100px" src="https://img.shop.com/Image/resources/images/torch-tafe2018-badge.png"></Image>
    <Image w="100px" h="100px" src="https://seal-greensboro.bbb.org/seals/blue-seal-153-100-marketamericashopcom-4002355.png"></Image>
   
</Flex>

<Flex justify="center" align="center" mt="30px" direction={{base:"column",lg:"row"}}>
<Image w="180px" h="100px" src={footer}></Image>

</Flex>

    </Box>
}