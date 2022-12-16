import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import { AuthContext } from "../contexts/AuthContext";
import "./styles.css";

export function Card({ icon, names, heading }) {
  let drop = names.map((el) => (
    <Text fontSize="medium" textAlign="left" fontWeight="bold">
      {el}
    </Text>
  ));

  return (
    <VStack
      gap={8}
      w="320px"
      padding="32px"
      borderWidth="1px"
      borderColor="#202340"
      borderStyle="solid"
    >
      <Spacer style={{ marginTop: "16px" }}>
        <HStack gap={1}>
          <Icon image={icon} size={32}></Icon>
          <Text m="16px" fontSize="2xl">
            {heading}
          </Text>
        </HStack>
        {drop}
      </Spacer>
    </VStack>
  );
}

export default function AccountPage() {

let context = useContext(AuthContext)

  let ah = [
    "Orders",
    "Manage AutoShip",
    "Gift Cards",
    "Online Shopping Trips",
    "Cashback Act",
  ];
  let ps = [
    "Profile",
    "Password",
    "Addresses",
    "Communication Preferences",
    "Payment Methods",
    "Default/Express Pay Settings",
    "Favorite Stores",
  ];
  let ss = [
    "Invite Friends",
    "List Manager",
    "Subscription Manager",
    "Trends",
    "Price Alerts",
    "eGifts",
    "Gift Registry",
    "SHOP Local",
    "Shopping Advisor",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Box width="100%" className="container">
      <Flex w="100%" justify="space-between" padding="8px 32px">
        <Heading>Account</Heading>
        <Button variant="outline" onClick={()=>context.signOut()}>Sign out</Button>
      </Flex>
      <Text padding={8}>
        Life is complicated-why should your shopping be? We’ve made it easy to
        manage all aspects of your account right here, all on one page. You can
        track your orders, update your account information, and access your
        favorite ZipShop.com features right here!
      </Text>
      <Flex
        gap={8}
        justify="center"
        mt="32px"
        className="container"
        w="100%"
        padding={4}
      >
        <Card
          icon="https://cdn-icons-png.flaticon.com/512/5296/5296819.png"
          heading="Account History"
          names={ah}
        />
        <Card
          icon="https://cdn-icons-png.flaticon.com/512/456/456212.png"
          heading="Personal Settings"
          names={ps}
        />
        <Card
          icon="https://cdn-icons-png.flaticon.com/512/503/503849.png"
          heading="Shopping Services"
          names={ss}
        />
      </Flex>
    </Box>
  );
}
