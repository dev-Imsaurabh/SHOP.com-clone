import { Box, Grid, Image, Text } from "@chakra-ui/react";
import "./styles.css";

export function BCards({ image }) {
  return (
    <Grid
      placeItems="center"
      w="280px"
      h="180px"
      border="20px solid teal"
      padding={8}
    >
      <Image src={image} w="50%"></Image>
    </Grid>
  );
}

export default function BrandsPage() {
  let images = [
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/isotonix-us-au-gb-hk-sg-logo.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/prime-usca-hk-logo.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/ultimate-aloe-usca-hk-logo.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/heart-health-logo-trademark-cross.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/mochatonix-us-logo.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/curcumin-extreme-usca-hk-sg-logo.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/Probiotics-10.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/thymenol-logo.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/cannabiquin-logo-tm.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/cannabicool-logo-tm.svg",
    },
    {
      image:
        "https://img.shop.com/Image/Images/11module/MABrands/axis-nutrition-logo-tm.svg",
    },
  ];

  let mapAll = images.map((el) => <BCards {...el} />);

  return (
    <Box className="container" padding={8}>
      <Text
        align="left"
        padding="0px 8px"
        mb="0px"
        fontWeight="bold"
        fontSize="3xl"
      >
        Our Brands
      </Text>
      <Text align="left" padding="0px 8px" mb="0px"  fontSize="2xl">
        Health & Nutrition{" "}
      </Text>
      <Grid  w="90%" templateColumns="repeat(4,1fr)" gap={8} m="auto" mt="24px">
        {mapAll}
      </Grid>
    </Box>
  );
}
