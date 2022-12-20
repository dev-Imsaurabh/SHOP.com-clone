import { Grid } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

export default function Layout7(){

    return <Grid  m="32px" templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)"}} padding="32px 32px" bg="white" mt="70px" gap={60}>

        <ImageCard image="https://img.shop.com/Image/homepage/us-hp-macys-toylist1665672167104.png" t1="2.00%" cbtn={true}/>
        <ImageCard image="https://img.shop.com/Image/homepage/Crayloa_HP1669845949812.jpeg" t1="2.00%" cbtn={true} t2="Buy 1 Get 1 40% off Stocking Stuffers"/>
        <ImageCard image="https://img.shop.com/Image/homepage/gifttree1670343352918.jpg" t1="SHOP.COM Exclusive!15% Off + Free Shipping with Code: SHOP15" cbtn={false}/>
    </Grid>
}