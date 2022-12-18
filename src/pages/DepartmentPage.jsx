import { Box ,Image} from "@chakra-ui/react";
import "./styles.css";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";
import cat3 from "../assets/cat3.png";
import cat4 from "../assets/cat4.png";
export default function DepartmentPage() {
  return (
    <Box className="container">
      '
      <Image
        w="100%"
        src="https://img.shop.com/Image/homepage/shopping-pq2237-essentials-banner1556313062244.jpg"
      ></Image>
      <Image
        w="100%"
        src={cat1}
      ></Image>
      <Image
        w="100%"
        src={cat2}
      ></Image>
      <Image
        w="100%"
        src={cat3}
      ></Image>
      <Image
        w="100%"
        src={cat4}
      ></Image>
    </Box>
  );
}
