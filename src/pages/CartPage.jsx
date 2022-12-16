import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import React, { useState } from 'react';
import { Button, Flex, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react';

export default function CartPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const [items, setItems] = useState([
        { id: 1, name: 'Item 1', price: 9.99, image: '/path/to/image1.jpg', quantity: 1 },
        { id: 2, name: 'Item 2', price: 19.99, image: '/path/to/image2.jpg', quantity: 2 },
      ]);
    
      const handleQuantityChange = (id, operation) => {
        setItems(
          items.map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: operation === 'add' ? item.quantity + 1 : item.quantity - 1,
              };
            }
            return item;
          }),
        );
      };
    
      const subTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return <Box className="container">

<Flex direction="column">
      <Heading>Your Cart</Heading>
      <Stack spacing={4}>
        {items.map(item => (
          <Flex key={item.id} align="center">
            <Image src={item.image} alt={item.name} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <IconButton
              aria-label="subtract"
              icon="subtract"
              onClick={() => handleQuantityChange(item.id, 'subtract')}
            />
            <Text>{item.quantity}</Text>
            <IconButton
              aria-label="add"
              icon="add"
              onClick={() => handleQuantityChange(item.id, 'add')}
            />
          </Flex>
        ))}
      </Stack>
      <Text>Subtotal: ${subTotal}</Text>
      <Button>Checkout</Button>
    </Flex>

    </Box>
}