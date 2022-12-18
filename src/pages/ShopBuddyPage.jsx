import { Box ,Flex,Image} from "@chakra-ui/react";
import "./styles.css";
import shopBuddy from "../assets/shopBuddy.png"
import faq from "../assets/faq.png"

export default function ShopBuddyPage() {
  return (
    <Box className="container" bg="white">
      '
     
     <Flex w="60%" direction="column" m="auto" gap={16}>
     <Image
        w="100%"
        src={shopBuddy}
      ></Image>
      <Image
        w="100%"
        src={faq}
      ></Image>

     </Flex>
     
    </Box>
  );
}
