import React, { useContext, useEffect, useState } from "react";
import { Flex, Box, Image, Text, Button, HStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../api/Api";
import "./styles.css"
import Loader from "../components/Loader";
import Icon from "../components/Icon";
import RatingBar from "../components/Home-page-extra/RatingBar";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";


export default function SeeProductPage() {
    let api = new Api()
    let [pro,setPro]=useState({})
    let [loading,setLoading]=useState(false)
    let [cartBtn,setCartBtn] = useState("Add to Cart")
    let context = useContext(AuthContext)
    let {isAuth,token} = context.authState
    let [user,setUser]=useState({})
    let {id,pid} =useParams()
    let nav = useNavigate()
    const desc = `Introducing ${pro.name} - the perfect solution for your everyday needs. Whether you're looking to upgrade your home, office, or personal style, ${pro.name} has got you covered.Featuring a sleek and modern design, ${pro.name} is guaranteed to turn heads and make a statement wherever it goes. But it's not just about looks - ${pro.name} is packed with a range of features that make it practical and convenient to use.From its durable construction to its advanced technology, ${pro.name} is built to last and deliver top-notch performance. Whether you're using it to complete a task, stay connected, or simply relax and unwind, ${pro.name} makes it easy to get things done.And with a variety of colors and styles to choose from, there's a ${pro.name} to suit every taste and preference. So why wait? Get yours today and experience the difference ${pro.name} can make in your life.`


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(()=>{
        setLoading(true)
        let getData =async()=>{
            let res =await api.getProductsData(`/${id}`)
            console.log(res)
            res.forEach(el => {
            if(el.id==pid){
                
                setPro(el)
            }
                
            });
            setLoading(false)

            
        }
        getData()

        

    },[])

    useEffect(()=>{
        const getData=async()=>{

       let res =await api.getData(process.env.REACT_APP_USERS+`/${token}`);

       console.log("my res")
       let flag =false
       res.data.account.cart.forEach((el)=>{
        if(el.id==pid){
            flag=true
            return
        }
       })

       if(flag){
        setCartBtn("Go to Cart")
       }
       



       setUser(res.data)

        }

       if(isAuth){
        getData()


       }
    },[])



    const handleCart = async()=>{
        pro.quantity=1
        user.account.cart.push(pro)
        setUser(user)

        let res = await api.patchData(user,process.env.REACT_APP_USERS+`/${token}`)
        console.log(res.data)
        setCartBtn("Go to Cart")
    }

   
    console.log(pro)

    


  return (
   loading? <Loader />:<Flex className="container" >
      <Box width="50%" p={4} >
        <Image w="100%" src={pro.image} alt={pro.name} />

      </Box>
      
      <Flex width="50%" p={4} direction="column" justify="start" gap={4}>
        <Text fontSize="xl" fontWeight="bold">
          {pro.name}
        </Text>
        <HStack><Text>Ratings: </Text><RatingBar count={pro.ratings} color="gold" size={16} /></HStack>

     <HStack>
     <Text fontSize="lg" fontWeight="bold">
          Price: ${pro.price}
        </Text>
        <Text fontSize="small" color="gray" textDecoration="line-through">
          offer ${pro.price+20}
        </Text>
     </HStack>
        <Button borderColor="#202340" variant="outline" _hover={{bg:"#202340",color:"white"}} leftIcon={
            <Icon
              image="https://cdn-icons-png.flaticon.com/512/2838/2838838.png"
              size={24}
            />
          } padding={7} w="400px"  onClick={()=>{
            if(isAuth&&cartBtn=="Add to Cart"){
                handleCart()
            }else{
                nav("/cart")
            }
          }}>{cartBtn}</Button>
        <Text fontSize="md"><Text fontSize="large" fontWeight="bold">Description:</Text>{desc}</Text>
      </Flex>
    </Flex>
  );
}
