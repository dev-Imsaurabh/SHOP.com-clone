import { Flex, Grid } from "@chakra-ui/react";
import RectangularCard from "./RectangularCard";

export default function Layout10(){

    return <Flex m="32px"marginTop="0px" justifyContent="center" align="center" padding="32px" gap={4} bg="white" direction={{base:"column",lg:"row"}} >

        <RectangularCard image="https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg" cat="HEALTH & NUTRITION" />
        <RectangularCard image="https://img.shop.com/Image/homepage/lipstick1572880828301.jpg" cat="BEAUTY" />
        <RectangularCard image="https://img.shop.com/Image/homepage/home_ma1572880950379.jpg" cat="HOME & CLEANING" />
        <RectangularCard image="https://img.shop.com/Image/homepage/baby-kids1572881179463.jpg" cat="BABY & KIDS" />
        <RectangularCard image="https://img.shop.com/Image/homepage/1840336563__225x225-img__.jpg" cat="JEWELRY" />
       
    </Flex>
}