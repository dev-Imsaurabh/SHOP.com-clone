import { Grid } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

export default function Layout9(){

    return <Grid templateColumns="repeat(3,1fr)" m="32px" padding="32px 32px" bg="white" mt="30px" gap={60}>

        <ImageCard image="https://img.shop.com/Image/homepage/ix-us-eng-105233-digestive-health-packets-holiday-banner-med1667506965936.jpg" cbtn={false} />
        <ImageCard image="https://img.shop.com/Image/homepage/royal-spa-usa-engsmall1666034758440.jpg"  cbtn={false}/>
        <ImageCard image="https://img.shop.com/Image/homepage/us-shp-isotonix-opc-beauty-blend1666710651225.jpg"  cbtn={false}/>
    </Grid>
}