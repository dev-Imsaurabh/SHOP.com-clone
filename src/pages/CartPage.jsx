import { Box, HStack, Spacer, Input,Card,CardBody,VStack, useToast, Badge } from "@chakra-ui/react";
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
import { useNavigate } from "react-router-dom";


export default function CartPage() {
  let nav = useNavigate()
  let api = new Api();
  let [user,setUser] = useState([])
  const [promo,setPromo] = useState("")
  let toast = useToast()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let context = useContext(AuthContext);
  let { isAuth, token } = context.authState;
  const {setTotalAmt}=context

  const [items, setItems] = useState([]);
  const[subTotal,setSubTotal] = useState(0)
  const[isLoading,setIsLoading]=useState(false)
  const[applied,setApplied]=useState(false)

  useEffect(() => {
    const getData = async () => {
      let res = await api.getData(process.env.REACT_APP_USERS + `/${token}`);
      console.log(res);
      setUser(res.data)
      setItems(res.data.account.cart);

    };
    getData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
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

  useEffect(()=>{
    let total = items?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(total)

  },[items])

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

  const applyPromoCode =()=>{

    if(promo=="shop10"){
    setIsLoading(true)
      setTimeout(() => {
        toast({
          title: "Promo Applied Successfully",
          description: "Horray ! You got 10% off on you total order.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        
    setSubTotal((total)=>(total*90)/100)
    setIsLoading(false)
    setApplied(true)
      }, 2000);


    }else{
      toast({
        title: "Invalid Promo Code",
        description: "Promo code is not valid.Try Again !",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

  }

  const handleCheckout=()=>{
    setTotalAmt(((subTotal*80)/100).toFixed(2))
      nav("/checkout")
    
  }
  return (
    <Box className="container">
    <Heading m="8px">Your Cart</Heading>
    <Flex direction="row" padding={8} w="100%">
      <Stack spacing={0} padding={2} w="70%">
        {items?.map((item) => (
          <Flex
            key={item.id}
            justify="space-between"
            w="100%"
            padding={4}
            // border="1px solid black"
            bg="white"
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
                <Text fontStyle="italic" m="8px">${(item.price*item.quantity).toFixed(2)}</Text>
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
      <VStack w="30%" >
        <Card  position="sticky"
  top="120px" w="100%" mt="8px" bg="white">
          <CardBody>
            <Flex direction="column" gap={8}>
              <HStack gap={4}> <Text>Subtotal: ${(subTotal-(subTotal * 0.2)).toFixed(2)}</Text><Text textDecoration="line-through">${subTotal.toFixed(2)}</Text>  <Badge colorScheme='green' hidden={!applied}>Promo code applied</Badge>
</HStack> 
            <Text>Total Savings: ${(subTotal * 0.2).toFixed(2)} {subTotal!=0&&("20% off")}</Text>
            <Flex align="center" gap={4} hidden={applied}>
              <Input placeholder="Enter promo code" onChange={(e)=>setPromo(e.target.value)} />
              <Button variant="outline" isLoading={isLoading} onClick={applyPromoCode}>Apply</Button>
            </Flex>
            <Button onClick={handleCheckout}  variant="outline" padding={6} _hover={{bg:"#202340",color:"white"}}>Checkout</Button>
            </Flex>
          </CardBody>
        </Card>
      </VStack>
    </Flex>
  </Box>


  );
}
