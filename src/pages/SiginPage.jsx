import { Box ,Flex,
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
    Spacer,} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css"
export default function SiginPage(){

let nav=useNavigate()
const [loading,setLoading]=useState(false)


    return <Box className="container">
        <Flex justify="center" gap={10} align="center" m="auto" w="80%">
<Flex
w="35%"
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} py={12} px={6}   w="100%">
          <Heading  fontSize={'4xl'}>Sign in</Heading>
        <Box
          p={2}>
        
          <Stack spacing={1} >
            <FormControl id="email">
              <FormLabel>Email address:</FormLabel>
              <Input type="email" placeholder="yourname@example.com" borderRadius={0} borderColor="#202340"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password:</FormLabel>
              <Input type="password" placeholder="Please enter your password" borderRadius={0} borderColor="#202340"/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Link textDecoration="underline" color="#202340">Forgot password?</Link>
              </Stack>
              <Button
                bg="#202340"
                isLoading={loading}
                color={'white'}
                borderRadius={20}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    <Flex w="50%" direction="column" align="center" justify="start" gap={4}>
<Spacer>
    
<Heading fontSize="lg">Don't have an account?
</Heading>
</Spacer>
<Text>With a SHOP.COM account, you can enjoy the following benefits: up to 50% Cashback on eligible purchases, redeem discount coupons, order status and history, saved payment options and addresses, exclusive emails and more. <Link textDecoration="underline">Learn more</Link></Text>
<Spacer>
<Button variant="outline" onClick={()=>{
    nav("/signup")
}} borderRadius="20px"  borderColor="#202340" _hover={{bg:"#202340" ,color:"white"}}>
    Create your new account
</Button>
</Spacer>

    </Flex>


        </Flex>



    </Box>

}