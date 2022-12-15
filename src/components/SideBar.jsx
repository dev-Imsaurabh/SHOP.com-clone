import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    Image,
    DrawerCloseButton,
    useDisclosure,Input, Text
    
  } from '@chakra-ui/react'
import React from 'react'
import "./cstyles.css"
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.svg"
import SideBarOp from './Home-page-extra/SideBarOp'
import Icon from './Icon'
  
export default function SideBar(){
  let nav = useNavigate()
  const allCat =['Gift Center',
  'SHOP.COM Home Warranties',
  'Onecart Exclusive Deals',
  'Clothes',
  'Shoes',
  'Beauty',
  'Home',
  'Electronics',
  'Health & Nutrition',
  'Jewelry',
  'Kids',
  'Pet Supplies',
  'Food & Drink',
  'Sports',
  'Travel',
  'SHOP Travel',
  'All Stores',
  'Exclusive Brands']

  let options=allCat.map((el)=>{

    return <SideBarOp key={el} name={el} />

  })
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
            <DrawerCloseButton  />
            <DrawerHeader>
            <Image _hover={{cursor:"pointer"}} onClick={()=>{
            nav("/")
        }} src={logo} width={120} ml={8}></Image>
            </DrawerHeader>
  
            <DrawerBody className='dbody'>

              <Text fontSize="medium" fontWeight="bold">Categories</Text>
              {options}
            </DrawerBody>
  
            <DrawerFooter>
             {/* create you footer */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </>
}