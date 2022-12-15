import { Box ,Flex,
    FormControl,
    FormLabel,
    Input,
    Alert,
    AlertIcon,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Spacer,} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/Api";
import { AuthContext } from "../contexts/AuthContext";


import "./styles.css"
export default function SigninPage(){

let nav=useNavigate()
const [loading,setLoading]=useState(false)
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(false);
const [ermsg,setErMsg]=useState("")
let context=useContext(AuthContext)
let {isAuth,token}=context.authState
let {signIn,setToken}=context




const handleErr=()=>{
    setError(false)
    setErMsg("")
  }

const handleSigin=async()=>{
    setLoading(true)
    let api = new Api();
    let exist = 0
    let userData = await api.getData(process.env.REACT_APP_USERS)
    if(email==""||password==""){
        setError(true)
        setErMsg("Please fill all the info..")
        return
    }else{
        userData.data.forEach(el => {
            if(el.email==email&&el.password==password){
                exist=1
                setToken(el.id)

            }
        });

        if(exist==1){
            setTimeout(() => {
                setLoading(false)
                
                 signIn()
                 nav("/")
                 console.log("login successful",token)

            }, 1000);

        }else{
            setLoading(false)
            setError(true)
            setErMsg("Invalid credential")
        }

    }
}

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
          {error&&<Stack spacing={3}>
              <Alert status="error">
                <AlertIcon />
                {ermsg}
              </Alert></Stack>}

        <Box
          p={2}>
        
          <Stack spacing={1} >

            
            <FormControl id="email">
              <FormLabel>Email address:</FormLabel>
              <Input type="email"  placeholder="yourname@example.com" borderRadius={0} borderColor="#202340"
               value={email}
               onChange={(e) => {
                   handleErr()
                   setEmail(e.target.value)

               }}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password:</FormLabel>
              <Input type="password" placeholder="Please enter your password" borderRadius={0} borderColor="#202340"  value={password}
                    onChange={(e) => {
                        handleErr()
                        setPassword(e.target.value)

                    }}/>
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
                onClick={handleSigin}
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
<Text>With a ZipShop.com account, you can enjoy the following benefits: up to 50% Cashback on eligible purchases, redeem discount coupons, order status and history, saved payment options and addresses, exclusive emails and more. <Link textDecoration="underline">Learn more</Link></Text>
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