import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";


export default function SignupPage() {
  let nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const[email,setEmail]=useState("")
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[cpassword,setCPassword]=useState("")

  const handleSignUp=()=>{
    console.log(name,email,password,cpassword)
  }

  return (
    <Box className="container">
      <Flex justify="center" gap={10} align="center" m="auto" w="80%">
        <Flex w="35%" minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} py={12} px={6} w="100%">
            <Heading fontSize={"4xl"}>Sign up</Heading>
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
                    onChange={(e)=>setName(e.target.value)}
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
                    onChange={(e)=>setEmail(e.target.value)}
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
                    onChange={(e)=>setPassword(e.target.value)}
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
                    onChange={(e)=>setCPassword(e.target.value)}
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
            With a SHOP.COM account, you can enjoy the following benefits: up to
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
