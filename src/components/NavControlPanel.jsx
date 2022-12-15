import { Button, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/Api";
import { AuthContext } from "../contexts/AuthContext";
import Icon from "./Icon";



export default function NavControlPanel(){
  const nav = useNavigate()
  const context = useContext(AuthContext)
  let {isAuth,token} = context.authState   
  let api = new Api()
  let [user,setUser]= useState(null)



  useEffect(()=>{
    setUser(null)
    const getData = async()=>{
      if(token!=null){
       let res =await api.getData(process.env.REACT_APP_USERS+`/${token}`)
       console.log(res)
       setUser(res.data)
      }
    }
    getData()
  },[token,isAuth])

  console.log(token)

  console.log(user)

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
          onClick={()=>{
            nav("/signin")
          }}
          border="0"
          borderColor="green.500"
        >
          {user==null?"Sign in":user.name}
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
          onClick={()=>{
            nav("/orders")
          }}
          color="black"
          bg="#f5f7fd"
          border="0"
          borderColor="green.500"
        >
          Orders
        </Button>
        <Button
       
       onClick={()=>{
        nav("/cart")
      }}
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