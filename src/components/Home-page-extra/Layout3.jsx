import { Grid } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

export default function Layout3(){

    return <Grid templateColumns="repeat(3,1fr)" m="32px" padding="32px 32px" bg="white" mt="70px" gap={60}>

        <ImageCard image="https://img.shop.com/Image/homepage/giftsforher-media1664553609405.jpg" cbtn={false} />
        <ImageCard image="https://img.shop.com/Image/homepage/giftsforhim-media1664553622036.jpg"  cbtn={false}/>
        <ImageCard image="https://img.shop.com/Image/homepage/giftsforteens-media1664553627912.jpg"  cbtn={false}/>
    </Grid>
}