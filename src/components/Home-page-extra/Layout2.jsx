import { Grid } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

export default function Layout2(){

    return <Grid  m="32px" templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)"}} padding="32px 32px" bg="white" mt="70px" gap={60}>

        <ImageCard image="https://img.shop.com/Image/homepage/oldnavy-media-feb221670437394495.jpg" t1="2.00%" cbtn={true} t2="Online Only! Grab 35% Off Purchase! Valid 12/12 - 12/13!"/>
        <ImageCard image="https://img.shop.com/Image/homepage/us-eng-bbb-memorialday-media-may211670870263691.jpg" t1="25% off any Order" cbtn={false}/>
        <ImageCard image="https://img.shop.com/Image/homepage/shop-en-us-Marshalls-FreeShip-300x2501668727246227-img.jpg" t1="Enjoy FREE SHIPPING on us when you spend $89!" cbtn={false}/>
    </Grid>
}