import { Grid } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

export default function Layout5(){

    return <Grid templateColumns={{base:"repeat(1,1fr)" ,lg:"repeat(4,1fr)" }} m="32px" padding="16px 16px" bg="white" mt="30px" gap={20}>

        <ImageCard image="https://img.shop.com/Image/homepage/shop-usa-100086-gift-wrapping-media1669930199153.jpg" cbtn={false} />
        <ImageCard image="https://img.shop.com/Image/homepage/shop-usa-105054-Holiday-egift-banners-social-media-assets-media1665596337501.jpg"  cbtn={false}/>
        <ImageCard image="https://img.shop.com/Image/homepage/shop-usa-105045-Holiday-Curbside-Pickup-Banners-Social-Media-min1666128402917.jpg"  cbtn={false}/>
        <ImageCard image="https://img.shop.com/Image/homepage/shop_usa_100094_eng_2022_holiday_buy_online_pickup_in_store_banner_-min1667575563985.jpg"  cbtn={false}/>
    </Grid>
}