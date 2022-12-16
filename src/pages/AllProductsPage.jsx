import { Box, Button, filter, Flex, Grid, Heading, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Api from "../api/Api";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import "./styles.css"

export default function AllProductsPage(){

    let {id} = useParams()
    const [data,setData]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const [loading,setLoading]=useState(false)
    const [sort,setSort]=useState(searchParams.get("sort"))
    console.log(id)

    useEffect(()=>{
        setLoading(true)
        let getData = async()=>{
            let api = new Api()
            let res=await api.getProductsData(`/${id}`)
            console.log(res)
            if(sort=="low"){
                res.sort((a,b)=>a.price-b.price);
            }else if(sort=="high"){
                res.sort((a,b)=>b.price-a.price);
  
            }
            setData(res)
            setLoading(false)
        }

        getData()
        
        

    },[id,sort])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    console.log(searchParams.get("sort"))
    return loading?<Loader />:<Box className="container" w="100%" padding={4}>

        <Flex gap={4} >
            <Box w="20%">

                <Heading textAlign="center">Sort by Price</Heading>
                <HStack mt="16px">
                    <Button onClick={()=>{
                        setSearchParams(`?sort=low`)
                        setSort("low")
                    }} variant="outline">Low to High</Button>
                    <Button  onClick={()=>{
                        setSearchParams(`?sort=high`)
                        setSort("high")


                    }} variant="outline">High to Low</Button>
                    </HStack>

            </Box>
            
        <Grid w="80%" templateColumns="repeat(4,1fr)" gap={4}>
            
            {data.map((el)=><ProductCard {...el}/>)}

        </Grid>
    
        </Flex>
    </Box>
}