import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  HStack,
  useToast,
  PinInput,
  PinInputField,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/Api";
import Icon from "../components/Icon";
import { AuthContext } from "../contexts/AuthContext";
import "./styles.css";
export default function OtpPage() {
  const [otp, setOtp] = useState("");
  let context= useContext(AuthContext)
  const {setTotalAmt}=context
  const [user,setUser]=useState({})
  const { totalAmt ,token,userAddress} = context.authState;
  let api = new Api()

  let nav = useNavigate()
  let toast = useToast();

  console.log(otp);
  const [isLaoding, setIsLoading] = useState(false);
  if(totalAmt==null){
    nav("/")
  }
  
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  const proceedPayment = async() => {
    if (otp === "1234") {
      setIsLoading(true);

      let cartData = user.account.cart
      cartData.forEach((el)=>{
        el.address=userAddress
        user.account.orders.push(el)
      })
      user.account.cart=[]
      let res = await api.patchData(user,process.env.REACT_APP_USERS+`/${token}`)
      console.log(res.data)
      toast({
        title: "Payment Successful",
        description: "Horray ! Your order is successfully placed !",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false)
      setTotalAmt(null)
      nav("/orders")
      
      
    }else{
        toast({
            title: "Invalid OTP",
            description: "Please enter correct OTP !",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
    }
  };



  useEffect(()=>{

    const getData = async()=>{

        let res = await api.getData(process.env.REACT_APP_USERS+`/${token}`)
        setUser(res.data)

    }

    getData()


  },[])

  



  return (
    <Box className="container" padding={16}>
      <Grid placeItems="center">
        <Card bg="white" w="50%">
          <CardBody padding={16}>
            <VStack gap={4}>
              <Icon
                image="https://cdn-icons-png.flaticon.com/512/8264/8264485.png"
                size={250}
              ></Icon>
              <Text>
                We have sent you OTP ! :Please enter correct OTP to proceed
                payment .
              </Text>
              <Text fontWeight="bold">To pay: ${totalAmt}</Text>
              <HStack>
                <PinInput onChange={(string) => setOtp(string)}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <Button
                isLoading={isLaoding}
                onClick={proceedPayment}
                variant="outline"
                bg="#3a3f73"
                _hover={{ bg: "#202340" }}
                color="white"
              >
                Verify
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
