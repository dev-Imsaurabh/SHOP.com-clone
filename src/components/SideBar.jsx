import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    DrawerCloseButton,
    useDisclosure,Input
  } from '@chakra-ui/react'
import React from 'react'
import Icon from './Icon'
  
export default function SideBar(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return <>
        <Button
        ref={btnRef}
        onClick={onOpen}
          size="md"
          height="48px"
          _hover={{ bg: "transparent"}}
          width="150px"
          leftIcon={
            <Icon
              image="https://cdn-icons-png.flaticon.com/512/7710/7710488.png"
              size={24}
            />
          }
          color="black"
          bg="#f5f7fd"
          border="0"
          borderColor="green.500"
        >
          Categories
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              {/* give body */}
            </DrawerBody>
  
            <DrawerFooter>
             {/* create you footer */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </>
}