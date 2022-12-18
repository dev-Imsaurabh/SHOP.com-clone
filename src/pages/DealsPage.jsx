import { Box, Grid, VStack, Text, Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import DealsCard1 from "../components/Deals-page-extra/DealsCard1";
import DealsCard2 from "../components/Deals-page-extra/DealsCard2";


import "./styles.css";
export default function DealsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  let carddata = [
    {
      title: "Overstock.com",
      image:
        "https://img.shop.com/Image/featuredhotdeal/us-eng-overstock-hd-dec221670968748515.png",
      desc: "Christmas Clearance Sale Free shipping on EVERYTHING big & small!* At Overstock.com. Shop",
    },
    {
      title: "Bed Bath & Beyond",
      image:
        "https://img.shop.com/Image/featuredhotdeal/us-eng-bbb-sale-oct221670882264122.png",
      desc: "25% off any Order",
    },
    {
      title: "Nike",
      image:
        "https://img.shop.com/Image/featuredhotdeal/us-en-nike-freeship-hd-fillin-dec201667502325776.jpg",
      desc: "Up to 40% off New Footwear Markdowns.",
    },
    {
      title: "ASICS",
      image:
        "https://img.shop.com/Image/featuredhotdeal/us-eng-asics-40p-hd-dec221670002325655.jpeg",
      desc: "40% off Fan Favorite Footwear and Apparel Styles.",
    },
  ];

  let brands = [
    { title: "BrightZZZCJCare" },
    { title: "CleanBwDhULife" },
    { title: "EcoIhZYXPNaturals" },
    { title: "FreshQnDywPure" },
    { title: "GreenYKjmIWellness" },
    { title: "BrightKLfZGCare" },
    { title: "CleanUaMvjLife" },
    { title: "EcoWIVJrnNaturals" },
    { title: "FreshBdDYCPure" },
    { title: "GreenXEGJMWellness" },
    { title: "BrightFqZjxCare" },
    { title: "CleanZtKbXLife" },
    { title: "EcoFHsGqBNaturals" },
    { title: "FreshVuNTRPure" },
    { title: "GreenoEKDCWellness" },
    { title: "BrightgDYvPCare" },
    { title: "CleanWzKfjLife" },
    { title: "EcoLRlKSNaturals" },
    { title: "FreshQkUWTPure" },
    { title: "GreenCzOJxWellness" },
  ];

  let lay1 = carddata.map((el) => <DealsCard1 {...el} />);
  let lay2 = brands.map((el) => <DealsCard2 {...el} />);

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
Featured Hot Deals      </Text>
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
        Hot Deals
      </Text>
      <Flex gap={8}>
      <VStack w="75%" mt="40px">{lay2}</VStack>
      <VStack mt="100px" w="25%" gap={4}>
        <Image w="100%" src="https://img.shop.com/Image/featuredhotdeal/NutriPhysical_USA_84399_SHOP_Banner_NutriPhysical_Campaign_media1608306245816.jpg"></Image>
        <Image w="100%" src="https://img.shop.com/Image/featuredhotdeal/A35CAB78-AFBA-4C5E-85F0-0A343527F4641669863167910.jpeg"></Image>
      </VStack>

      </Flex>
    </Box>
  );
}
