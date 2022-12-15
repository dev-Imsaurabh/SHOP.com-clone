import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Alert,
  AlertIcon,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/Api";
import "./styles.css";

export default function SignupPage() {
  let nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ermsg,setErMsg]=useState("")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSignUp = async() => {
    let api = new Api();
    let exist = 0
    let userData = await api.getData(process.env.REACT_APP_USERS)
    console.log(userData.data)
    let pattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if(name==""||email==""||password==""||cpassword==""){
        setError(true)
        setErMsg("Please fill all the info..")
        return
    }else if(!pattern.test(password)){

        setError(true)
        setErMsg("Password much contain a number a captial letter a special character")        

    }else if(password!==cpassword){
        setError(true)
        setErMsg("Password not matching")
        return
    }else{


        userData.data.forEach(el => {
            if(el.email==email){
                exist=1
            }
        });

       
        if(exist==1){
            setError(true)
        setErMsg("User already exist")
            return
        }



        setLoading(true)
        let data={
            name:name,
            email:email,
            password:password
        }
        
       let res = await api.setData(data,process.env.REACT_APP_USERS)
       console.log(res)
       if(res.request.status==201){
        setLoading(false)
        nav("/signin")

       }else{
        setError(true)
        setErMsg("Something went wrong: Hint->Check Internet Connection")
       }

    }
  };
  const handleErr=()=>{
    setError(false)
    setErMsg("")
  }

  return (
    <Box className="container">
      <Flex justify="center" gap={10} align="center" m="auto" w="80%">
        <Flex w="35%" minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} py={12} px={6} w="100%">
            <Heading fontSize={"4xl"}>Sign up</Heading>
           {error&&<Stack spacing={3}>
              <Alert status="error">
                <AlertIcon />
                {ermsg}
              </Alert>
            </Stack>}
            <Box p={2}>
              <Stack spacing={1}>
                <FormControl>
                  <FormLabel>Full Name:</FormLabel>
                  <Input
                    type="text"
                    placeholder="Eg.Tyrion Lannister"
                    borderRadius={0}
                    borderColor="#202340"
                    value={name}
                    onChange={(e) => {
                        handleErr()
                        setName(e.target.value)

                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email address:</FormLabel>
                  <Input
                    type="email"
                    placeholder="yourname@example.com"
                    borderRadius={0}
                    borderColor="#202340"
                    value={email}
                    onChange={(e) => {
                        handleErr()
                        setEmail(e.target.value)

                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Password:</FormLabel>
                  <Input
                    type="password"
                    placeholder="Please enter your password"
                    borderRadius={0}
                    borderColor="#202340"
                    value={password}
                    onChange={(e) => {
                        handleErr()
                        setPassword(e.target.value)

                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Confirm Password:</FormLabel>
                  <Input
                    type="password"
                    placeholder="Please re-enter your password"
                    borderRadius={0}
                    borderColor="#202340"
                    value={cpassword}
                    onChange={(e) => {
                        handleErr()
                        setCPassword(e.target.value)

                    }}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Link
                      to="/signup"
                      textDecoration="underline"
                      color="#202340"
                    >
                      Already have an account?
                    </Link>
                  </Stack>
                  <Button
                    bg="#202340"
                    isLoading={loading}
                    color={"white"}
                    onClick={handleSignUp}
                    borderRadius={20}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>

        <Flex w="50%" direction="column" align="center" justify="start" gap={4}>
          <Spacer>
            <Heading fontSize="lg">Already have an account?</Heading>
          </Spacer>
          <Text>
            With a ZipShop.com account, you can enjoy the following benefits: up to
            50% Cashback on eligible purchases, redeem discount coupons, order
            status and history, saved payment options and addresses, exclusive
            emails and more. <Link textDecoration="underline">Learn more</Link>
          </Text>
          <Spacer>
            <Button
              variant="outline"
              onClick={() => {
                nav("/signin");
              }}
              borderRadius="20px"
              borderColor="#202340"
              _hover={{ bg: "#202340", color: "white" }}
            >
              Sign in
            </Button>
          </Spacer>
        </Flex>
      </Flex>
    </Box>
  );
}
