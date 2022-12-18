import { Box, Grid, VStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import StoreCard1 from "../components/Store-page-extra/StoreCard1";
import StoreCard2 from "../components/Store-page-extra/StoreCard2";

import "./styles.css";
export default function StoresPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  let carddata = [
    {
      title: "Bed Bath & Beyond",
      image:
        "https://img.shop.com/Image/featuredstore/ca_eng_bedbathandbeyond_cuisinart_hd_mp-14316_dec181549553338902.jpg",
      desc: "One of the largest selections of products for your home anywhere, at everyday low prices!",
    },
    {
      title: "Bed Bath Fashions",
      image:
        "https://img.shop.com/Image/featuredstore/bedfashions1665695093222.jpg",
      desc: "Bed Bath Fashions sells quality home textile products at affordable prices. Free Standard",
    },
    {
      title: "Blair Tech",
      image:
        "https://img.shop.com/Image/featuredstore/us-en-blairtech-featuredstore-fillin-oct201602867043361.jpg",
      desc: "Blair Technology Group is one of just 20 official Microsoft Authorized Refurbishers (MAR) in the",
    },
    {
      title: "Priority Tire",
      image:
        "https://img.shop.com/Image/featuredstore/prioritytire1654611656490.jpg",
      desc: "At Priority Tire, we guarantee you'll find the top name brands at the cheapest prices! You'll save",
    },
  ];

  let storenames = [
    { title: "EcoBQhCeMart" },
    { title: "ShopVpZTkPlace" },
    { title: "OnlineZRnDBCentral" },
    { title: "MegaHNMvLZone" },
    { title: "MarketGQWYPHub" },
    { title: "EcoIWcjNyMart" },
    { title: "ShopJFZLlQPlace" },
    { title: "OnlineNxPbWCentral" },
    { title: "MegaZTJgKZone" },
    { title: "MarketGBLwahHub" },
    { title: "EcoVFCALEMart" },
    { title: "ShopYUZMjGPlace" },
    { title: "OnlineQSNJvnCentral" },
    { title: "MegaCKAZJLZone" },
    { title: "MarketWFPVNBHub" },
    { title: "EcoHGRWTLMart" },
    { title: "ShopPKCxJfPlace" },
    { title: "OnlineMLVdXJCentral" },
    { title: "MegaJEWRwRZone" },
    { title: "MarketBDZFECHub" },
  ];

  let lay1 = carddata.map((el) => <StoreCard1 {...el} />);
  let lay2 = storenames.map((el) => <StoreCard2 {...el} />);

  return (
    <Box className="container">
          <Text
        align="left"
        padding="0px 8px"
        mb="0px"
        mt="50px"
        fontWeight="bold"
        fontSize="large"
      >
Featured Stores      </Text>
      <Grid templateColumns="repeat(4,1fr)" gap={4}>
        {lay1}
      </Grid>
      <Text
        align="left"
        padding="0px 8px"
        mb="0px"
        mt="50px"
        fontWeight="bold"
        fontSize="4xl"
      >
        All Stores
      </Text>
      <VStack mt="40px">{lay2}</VStack>
    </Box>
  );
}
