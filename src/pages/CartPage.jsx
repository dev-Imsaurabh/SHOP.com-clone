import { Box, HStack, Spacer, Card,CardBody,VStack } from "@chakra-ui/react";
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
import Icon from "../components/Icon";

export default function CartPage() {
  let api = new Api();
  let [user,setUser] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let context = useContext(AuthContext);
  let { isAuth, token } = context.authState;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await api.getData(process.env.REACT_APP_USERS + `/${token}`);
      console.log(res);
      setUser(res.data)
      setItems(res.data.account.cart);

    };
    getData();
  }, []);

  const handleQuantityChange = async(id, operation) => {
    let updated = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity:
              operation === "add" ? item.quantity + 1 : item.quantity - 1,
          };
        }
        return item;
      })
    setItems(
      updated
    );

    user.account.cart=updated
    setUser(user)

   let res = await api.patchData(user,process.env.REACT_APP_USERS+`/${token}`)
   console.log(res.data.account.cart)
  };

  const subTotal = items?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove=async(id)=>{
    let updated = items.filter((el)=>el.id!=id)
    setItems(
        updated
      );
  
      user.account.cart=updated
      setUser(user)
  
     let res = await api.patchData(user,process.env.REACT_APP_USERS+`/${token}`)
     console.log(res.data.account.cart)

  }
  return (
    <Box className="container">
      <Heading m="8px">Your Cart</Heading>
      <Flex direction="row" padding={8} w="100%">
        <Stack spacing={4} padding={2} w="70%">
          {items?.map((item) => (
            <Flex
              key={item.id}
              justify="space-between"
              w="100%"
              padding={4}
              border="1px solid black"
              gap={2}
            >
              <Image
                w="20%"
                src={item.image}
                alt={item.name}
                borderRadius={4}
              />
              <VStack w="80%">
                <Spacer>
                  <Text fontWeight="bold" fontSize="large" m="8px">{item.name}</Text>
                  <Text fontStyle="italic" m="8px">${item.price}</Text>
                  <HStack m="8px">
                    <IconButton
                      variant="outline"
                      disabled={item.quantity==1}
                      aria-label="subtract"
                      icon={
                        <Icon
                          image="https://cdn-icons-png.flaticon.com/512/5974/5974627.png"
                          size={16}
                        />
                      }
                      onClick={() => handleQuantityChange(item.id, "subtract")}
                    />
                    <Text>{item.quantity}</Text>
                    <IconButton
                      variant="outline"
                      disabled={item.quantity==20}

                      aria-label="add"
                      icon={
                        <Icon
                          image="https://cdn-icons-png.flaticon.com/512/148/148764.png"
                          size={16}
                        />
                      }
                      onClick={() => handleQuantityChange(item.id, "add")}
                    />
                  </HStack>
                  <Button variant="outline" onClick={()=>handleRemove(item.id)}>Remove</Button>
                </Spacer>
              </VStack>
            </Flex>
          ))}
        </Stack>
        <VStack w="30%" position="fixed" right="0">
          <Card w="100%" mt="8px" bg="white">
            <CardBody>
              <Flex direction="column" gap={8}>
              <Text>Subtotal: ${subTotal.toFixed(2)}</Text>
              <Button  variant="outline" padding={6} _hover={{bg:"#202340",color:"white"}}>Checkout</Button>{" "}
              </Flex>
            </CardBody>
          </Card>
        </VStack>
      </Flex>
    </Box>
  );
}
