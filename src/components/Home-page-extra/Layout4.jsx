import { Flex, Grid } from "@chakra-ui/react";
import CircularCard from "./CircularCard";

export default function Layout4(){

    return <Flex m="32px"marginTop="0px" justifyContent="center" align="center" padding="32px" gap={4} bg="white" direction={{base:"column",lg:"row"}}>

        <CircularCard image="https://img.shop.com/Image/240000/243400/243406/products/1947692115.jpg?plain&size=400x400" cat="ELECTRONIC GIFTS" />
        <CircularCard image="https://img.shop.com/Image/240000/243300/243380/products/1869987733.jpg?plain&size=300x300" cat="GIFTS UNDER $25" />
        <CircularCard image="https://img.shop.com/Image/260000/266700/266794/products/1920614672.jpg?plain&size=300x300" cat="GIFTS UNDER $50" />
        <CircularCard image="https://img.shop.com/Image/240000/243300/243380/products/1942133519.jpg?plain&size=1600x1600" cat="GIFTS UNDER $100" />
        <CircularCard image="https://img.shop.com/Image/240000/248600/248698/products/1766653370.jpg?plain&size=300x300" cat="STOCKING STUFFERS" />
        <CircularCard image="https://img.shop.com/Image/280000/287000/287062/products/1942108864.jpg?plain&size=300x300" cat="GIFTS FOR THE FAMILY" />
   

    </Flex>
}