import {
  Box,
  HStack,
  Spacer,
  Input,
  Card,
  CardBody,
  VStack,
  useToast,
  Badge,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Api from "../api/Api";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function OrdersPage() {
  let nav = useNavigate();
  let api = new Api();
  let [user, setUser] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let context = useContext(AuthContext);
  let { isAuth, token } = context.authState;

  const [items, setItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let res = await api.getData(process.env.REACT_APP_USERS + `/${token}`);
      console.log(res);
      setUser(res.data);
      setItems(res.data.account.orders);
    };
    getData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let total = items?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(total);
  }, [items]);

  return (
    <Box className="container">
        <Flex gap={2} bg="white" position="sticky" top="100px" justify="start" align="center" p={8}>
        <Heading m="8px">Your Orders</Heading>

        <Card bg="white">
            <CardBody>
                <Text fontSize="2xl" fontWeight="bold">To pay ${subTotal.toFixed(2)}</Text>
            </CardBody>
          </Card>
        </Flex>
      <Flex direction="row" padding={8} w="100%">
        <Stack spacing={4} padding={2} w="100%">
          {items?.map((item) => (
            <Flex
              key={item.id}
              justify="space-between"
              w="100%"
              padding={4}
            //   border="1px solid black"
              gap={2}
            >
              <Image
                w="10%"
                src={item.image}
                alt={item.name}
                borderRadius={4}
              />
              <VStack w="90%">
                <Spacer>
                  <Text fontWeight="bold" fontSize="large" m="8px">
                    {item.name}
                  </Text>
                  <Text fontStyle="italic" m="8px">
                    Total: ${item.price*item.quantity}
                  </Text>
                    <Text>Quantity: x{item.quantity}</Text>
                    <Text>To deliver: {item.address}</Text>
                </Spacer>
              </VStack>
            </Flex>
          ))}
        </Stack>

       
      </Flex>
    </Box>
  );
}
