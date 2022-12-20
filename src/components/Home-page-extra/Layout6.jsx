import { Grid } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

export default function Layout6(){

    return <Grid  m="32px" templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)"}} padding="32px 32px" bg="white" mt="70px" gap={60}>

        <ImageCard image="https://img.shop.com/Image/homepage/us-mk-media-dec221670445967935.jpg" t1="2.00%" cbtn={true} t2="The Holiday Event: Enjoy 25% Off Your Full Price Purchase! Plus, Up To 60%"/>
        <ImageCard image="https://img.shop.com/Image/homepage/us-eng-3rdlove-media-hp-dec221669846216726.jpg" t1="2.00%" cbtn={true}/>
        <ImageCard image="https://img.shop.com/Image/homepage/athelta-media-hp5556-14898061669846349406.jpg" t1="2.00%" cbtn={true}/>
    </Grid>
}