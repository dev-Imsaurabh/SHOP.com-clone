import { Box, Button, Flex, Grid, Heading, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Api from "../api/Api"
import Loader from "../components/Loader"
import ProductCard from "../components/ProductCard"


export default function SearchPage(){
    const [data,setData]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const [loading,setLoading]=useState(false)
    const sort=searchParams.get("sort")
    const search=searchParams.get("q")
    

     useEffect(()=>{
        setLoading(true)
        let getData = async()=>{
            let api = new Api()
            let res=await api.getSearchData()
            // console.log(res)
          
            let wpro = []
            res.forEach(el => {
              let filtered =  el.items.filter((item)=>{
            if(item.name.toLowerCase().includes(search.toLowerCase())||item.category.toLowerCase().includes(search.toLowerCase())){
                return item

            }

                })
                // console.log(filtered)
              wpro=[...wpro,...filtered]  
            });

            // console.log(wpro)
              if(sort=="low"){
                wpro.sort((a,b)=>a.price-b.price);
            }else if(sort=="high"){
                wpro.sort((a,b)=>b.price-a.price);
  
            }
            setData(wpro)


            setLoading(false)
        }

        getData()
        
        

    },[sort,search])
    console.log(searchParams.get("q"))

    return loading?<Loader />:<Box className="container" w="100%" padding={4}>

    <Flex gap={4} >
        <Box w="20%">

            <Heading textAlign="center">Sort by Price</Heading>
            <HStack mt="16px">
                <Button onClick={()=>{
                    setSearchParams(`?q=${search}&sort=low`)
                }} variant="outline">Low to High</Button>
                <Button  onClick={()=>{
                    setSearchParams(`?q=${search}&sort=high`)


                }} variant="outline">High to Low</Button>
                </HStack>

        </Box>
        
    <Grid w="80%" templateColumns="repeat(4,1fr)" gap={4}>
        
        {data.map((el)=><ProductCard {...el}/>)}

    </Grid>

    </Flex>
</Box>

}