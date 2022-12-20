import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  Grid,
  Card,
  CardBody,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../api/Api";
import Footer from "../components/Footer";
import Layout1 from "../components/Home-page-extra/Layout1";
import Layout10 from "../components/Home-page-extra/Layout10";
import Layout11 from "../components/Home-page-extra/Layout11";
import Layout2 from "../components/Home-page-extra/Layout2";
import Layout3 from "../components/Home-page-extra/Layout3";
import Layout4 from "../components/Home-page-extra/Layout4";
import Layout5 from "../components/Home-page-extra/Layout5";
import Layout6 from "../components/Home-page-extra/Layout6";
import Layout7 from "../components/Home-page-extra/Layout7";
import Layout8 from "../components/Home-page-extra/Layout8";
import Layout9 from "../components/Home-page-extra/Layout9";
import RatingBar from "../components/Home-page-extra/RatingBar";
import Icon from "../components/Icon";
import ProductCard from "../components/ProductCard";
import ProductSlider from "../components/ProductSlider";
import { AuthContext } from "../contexts/AuthContext";
import CheckoutPage from "./CheckoutPage";
import "./styles.css";


export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let nav = useNavigate()

  let context = useContext(AuthContext);
  const { isAuth } = context.authState;

  const [d1,setd1]=useState([])
  const [d2,setd2]=useState([])
 

  useEffect(()=>{
   const perform=async()=>{
    let api = new Api()
    
  setd1(await api.getProductsData(process.env.REACT_APP_BEAUTY))
   }
   perform()
  },[])
  useEffect(()=>{
    const perform=async()=>{
     let api = new Api()
     
   setd2(await api.getProductsData(process.env.REACT_APP_CLOTHES))
    }
    perform()
   },[])

  return (
    <Box className="container">
      {/* <ProductCard image={"https://img.shop.com/Image/240000/243300/243380/products/1942133519.jpg?plain&size=600x600"} name="Motives® X Amber Essential Collection" price={80.00} delivery=" 1.60 / 2%" rating={5}/> */}

      <Flex justify="center" direction={{base:"column",lg:"row"}} align="center" gap={2} mb={8} padding={2}>
        <Text fontSize="3xl" color="gray">
          $50,009,502
        </Text>
        <Text fontSize="samll" color="black">
          awarded in
        </Text>
        <Icon
          image="https://img.shop.com/Image/resources/images/cashback-icon.svg"
          size={32}
        ></Icon>
        <Text fontSize="samll" fontWeight="bold" color="black">
          Cashback !
        </Text>
        <Button
          _hover={{ bg: "gray", color: "white" }}
          colorScheme="gray"
          variant="outline"
          borderColor="gray"
          borderRadius="20px"
        >
          Learn More
        </Button>
      </Flex>

      <Image
        bg="white"
        w="100%"
        src="https://img.shop.com/Image/homepage/shop-gbr-102789-holiday-hot-toys-banners-1600x300-img-min1669996056936.jpg"
      ></Image>

      <Grid
        templateColumns={{base:"repeat(1,1fr)",lg:"repeat(4,1fr)"}}
        templateRows="repeat(1,500px)"
        padding="8px"
        gap={10}
        marginTop="50px"
      >
        <Card bg="white">
          <CardBody>
            <Flex h="100%" direction="column" justify="space-between">
              <Text align="left" fontSize="2xl">
                Recently Viewed
              </Text>

              <Image
                w="100%"
                src="https://img.shop.com/Image/250000/251800/251872/products/1938342703.jpg?plain&size=300x300"
              ></Image>

              <Link to="" style={{ textDecoration: "underline" }}>
                Browsing History
              </Link>
            </Flex>
          </CardBody>
        </Card>

        <Card bg="white">
          <CardBody>
            <Flex h="100%" direction="column" justify="space-between">
              <Text align="left" fontSize="2xl">
                Complimentary Shipping, Returns and Gift Packaging Available
              </Text>

              <Image
                w="100%"
                src="https://img.shop.com/Image/homepage/us-eng-toryburch-hp-winter-dec221669836193393.jpeg"
              ></Image>

              <Link to="" style={{ textDecoration: "underline" }}>
                Shop Now
              </Link>
            </Flex>
          </CardBody>
        </Card>

        <Card bg="white">
          <CardBody>
            <Flex h="100%" direction="column" justify="space-between">
              <Text align="left" fontSize="2xl">
                Featured OneCart Stores
              </Text>
              <VStack>
                <Button width="100%" m="auto" h="60px">
                  <Image src="https://img.shop.com/Image/topbrands/nmlogos_136706.gif"></Image>
                </Button>
                <Button width="100%" m="auto" h="60px">
                  <Image src="https://img.shop.com/Image/topbrands/nmlogos_134047.gif"></Image>
                </Button>
                <Button width="100%" m="auto" h="60px">
                  <Image src="https://img.shop.com/Image/topbrands/nmlogos_108567.gif"></Image>
                </Button>
                <Button width="100%" m="auto" h="60px">
                  <Image src="https://img.shop.com/Image/topbrands/nmlogos_113138.gif"></Image>
                </Button>
              </VStack>
              <Link to="" style={{ textDecoration: "underline" }}>
                See More Stores
              </Link>
            </Flex>
          </CardBody>
        </Card>

        <div>
          <Card display={!isAuth ? "block" : "none"} bg="white">
            <CardBody>
              <Flex direction="column">
                <Button
                  bg="#202340"
                  color="white"
                  _hover={{ bg: "gray" }}
                  h="50px"
                  borderRadius="30px"
                  onClick={()=>{
                    nav("/signin")
                  }}
                  colorScheme="gray"
                >
                  Sign in
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Image
            mt="50px"
            width="95%"
            src="https://img.shop.com/Image/homepage/stocking-stuffers-media-300x250-img1669837197571.jpg"
          ></Image>
        </div>
      </Grid>
      <Text
        align="center"
        m="32px"
        bg="white"
        mt="50px"
        mb="0px"
        fontSize="4xl"
      >
        Popular Brand
      </Text>
      <Layout1 />
      {/* <Image w="120px" style={{position:"absolute",zIndex:"50",left:"45%",marginTop:"-25px"}} src="https://img.shop.com/Image/resources/homepage/shop-homepage-icon.svg"></Image> */}
      <Layout2 />
      <Layout3 />
      <Text
        align="center"
        m="32px"
        mb="0px"
        bg="white"
        mt="50px"
        fontSize="4xl"
      >
        Gift Ideas
      </Text>
      <Layout4 />
      <Layout5 />

      <Text
        align="left"
        m="32px"
        padding="0px 8px"
        mb="0px"
        bg="white"
        mt="50px"
        fontSize="4xl"
      >
        NEW Layered Holiday Collection
      </Text>

      <Layout11 />

      <Layout6 />

      {/* left slider  Luxury Beauty Gifts from Motives */}
      {d1.length!=0&&<ProductSlider data={d1} count={4}/>}


      <Layout7 />

      {/* Lumière de Vie */}
      <Text
        align="center"
        m="32px"
        mb="0px"
        bg="white"
        mt="50px"
        fontSize="4xl"
      >
        Holiday Specials
      </Text>
      <Layout8 />
      {d2.length!=0&&<ProductSlider data={d2} count={4}/>}

      <Layout9 />

      {/* Top Sellers */}

      {/* Cleaning & Health Have Never Been More Important */}

      <Text
        align="center"
        m="32px"
        mb="0px"
        bg="white"
        mt="50px"
        fontSize="4xl"
      >
        Our Brands
      </Text>
      <Layout10 />
    </Box>
  );
}
