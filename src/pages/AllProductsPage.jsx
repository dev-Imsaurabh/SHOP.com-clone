import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  filter,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Api from "../api/Api";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import "./styles.css";

export default function AllProductsPage() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const sort = searchParams.get("sort");
  const ratings = searchParams.get("ratings");
  const [value, setValue] = useState("")

  console.log(id);

  useEffect(() => {
    setLoading(true);
    let getData = async () => {
      let api = new Api();
      let res = await api.getProductsData(`/${id}`);
      console.log(res);
      if (sort == "low") {
        res.sort((a, b) => a.price - b.price);
      } else if (sort == "high") {
        res.sort((a, b) => b.price - a.price);
      }

      if (ratings) {
        console.log("yes",ratings)
       res= res.filter((el)=>{
            if(el.ratings==Number(ratings)){
                return el
            }
        })
      } 




      setData(res);
      setLoading(false);
    };

    getData();
  }, [id, searchParams,value]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(searchParams.get("sort"));
  console.log(value)
  return loading ? (
    <Loader />
  ) : (
    <Box className="container" w="100%" padding={4}>
      <Flex gap={4}>
        <Box w="20%">
          <VStack position="sticky" top="120px">
            <Heading fontSize="2xl" textAlign="center">
              Sort by Price
            </Heading>
            <HStack mt="16px">
              <Button
                onClick={() => {
                  setSearchParams(`?sort=low`);
                }}
                variant="outline"
              >
                Low to High
              </Button>
              <Button
                onClick={() => {
                  setSearchParams(`?sort=high`);
                }}
                variant="outline"
              >
                High to Low
              </Button>
            </HStack>

            <Heading fontSize="2xl" textAlign="center">
              Filter by Ratings
            </Heading>

            <Card w="100%">
              <CardBody>
                  <RadioGroup onChange={(value)=>{
                    setValue(value)
                    setSearchParams(`&ratings=${value}`)
                  }}
                  value={value}>
                    <Stack direction="column">
                      <Radio value="1">1 Star</Radio>
                      <Radio value="2">2 Star</Radio>
                      <Radio value="3">3 Star</Radio>
                      <Radio value="4">4 Star</Radio>
                      <Radio value="5">5 Star</Radio>
                    </Stack>
                  </RadioGroup>
              </CardBody>
            </Card>
          </VStack>
        </Box>

        <Grid w="80%" templateColumns="repeat(4,1fr)" gap={4}>
          {data.map((el) => (
            <ProductCard {...el} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
