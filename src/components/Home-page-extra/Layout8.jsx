import { Flex, Grid } from "@chakra-ui/react";
import CircularCard from "./CircularCard";

export default function Layout8(){

    return <Flex m="32px"marginTop="0px" justifyContent="center" align="center" padding="32px" gap={4} bg="white">

        <CircularCard image="https://img.shop.com/Image/240000/248600/248698/products/925887691.jpg?plain&size=750x750" cat="BEAUTY" />
        <CircularCard image="https://img.shop.com/Image/280000/282000/282022/products/1875095140.jpg?plain&size=750x750" cat="JEWELRY" />
        <CircularCard image="https://img.shop.com/Image/210000/214100/214196/products/701199621.jpg?plain&size=750x750" cat="HEALTH & NUTRITION" />
        <CircularCard image="https://img.shop.com/Image/240000/243300/243390/products/1954251885.jpg?plain&size=1600x1600" cat="CLEANING" />
        <CircularCard image="https://img.shop.com/Image/240000/243300/243380/products/1788447992.jpg?plain&size=750x750" cat="BEAUTY GIFT SETS" />
        <CircularCard image="https://img.shop.com/Image/240000/248600/248698/products/1849034699.jpg?plain&size=750x750" cat="SEE ALL" />
   

    </Flex>
}