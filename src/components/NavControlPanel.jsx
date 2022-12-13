import { Button, Flex } from "@chakra-ui/react";
import Icon from "./Icon";


export default function NavControlPanel(){

    return <Flex align="center"  justify="end">
 <Button
       
          size="md"
          height="48px"
          width="150px"
          _hover={{ bg: "transparent",color:"teal"}}

          leftIcon={
            <Icon
              image="https://cdn-icons-png.flaticon.com/512/3033/3033143.png"
              size={24}
            />
          }
          color="black"
          bg="#f5f7fd"
          border="0"
          borderColor="green.500"
        >
          Sign in
        </Button>
        <Button
       
          size="md"
          height="48px"
          width="150px"
          _hover={{ bg: "transparent",color:"teal"}}

          leftIcon={
            <Icon
              image="https://cdn-icons-png.flaticon.com/512/4210/4210604.png"
              size={24}
            />
          }
          color="black"
          bg="#f5f7fd"
          border="0"
          borderColor="green.500"
        >
          Orders
        </Button>
        <Button
       
          size="md"
          height="48px"
          _hover={{ bg: "transparent",color:"teal"}}

          width="150px"
          leftIcon={
            <Icon
              image="https://cdn-icons-png.flaticon.com/512/2838/2838838.png"
              size={24}
            />
          }
          color="black"
          bg="#f5f7fd"
          border="0"
          borderColor="green.500"
        >
          Cart
        </Button>

    </Flex>

}