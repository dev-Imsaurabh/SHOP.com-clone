import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import Icon from "../Icon";
import ImageCard from "./ImageCard";


export default function Layout1(){


    return <Flex m="32px" mt="0px" direction={{base:"column",lg:"row"}}  gap={10} padding="16px 32px" bg="white">

        <Image src="https://img.shop.com/Image/homepage/shop-us-105060-holiday-egift-cards-banners-600x600-img-min1670878325117.jpg" w="400px" h="400px"></Image>
        <Box w="80%">

            <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(5,1fr)"}} gap={4} padding="8px">

                <Button _hover={{bg:"white"}} variant="outline"  bg="white" h="100px"><Image w="100px" src="https://img.shop.com/Image/homepage/nike_140x110-img.gif"></Image></Button>
                <Button _hover={{bg:"white"}} variant="outline" bg="white" h="100px"><Image w="100px" src="https://img.shop.com/Image/homepage/michaelkors_140x110-img.gif"></Image></Button>
                <Button _hover={{bg:"white"}} variant="outline" bg="white" h="100px"><Image w="100px" src="https://img.shop.com/Image/homepage/coach_brand7.jpg"></Image></Button>
                <Button _hover={{bg:"white"}} variant="outline" bg="white" h="100px"><Image w="100px" src="https://img.shop.com/Image/homepage/adidaslogo_140_1100.jpg"></Image></Button>
                <Button _hover={{bg:"white"}} variant="outline" bg="white" h="100px"><Image w="100px" src="https://img.shop.com/Image/homepage/cuisinart.gif"></Image></Button>
              

            </Grid>

            <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)"}} gap={4}>
                <ImageCard image="https://img.shop.com/Image/homepage/us-eng-jcpenney-50p-hp-nov221669752610403.jpeg" cbtn={true} t1="2.00%" t2="JC Penney Up to 50% Off Home, select styles."/>
                <ImageCard image="https://img.shop.com/Image/homepage/us-eng-macys-20poffgifts-hp-dec221670435068951.jpeg" cbtn={true} t1="2.00%"/>
                <ImageCard image="https://img.shop.com/Image/homepage/us-eng-nike-hp-dec221670866755445.jpeg" cbtn={true} t1="2.00%"/>
            </Grid>

        </Box>

        
    </Flex>
}