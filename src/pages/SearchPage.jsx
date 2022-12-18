import { Box, Button, Card, CardBody, Flex, Grid, Heading, HStack, Radio, RadioGroup, Stack, VStack } from "@chakra-ui/react"
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
    const ratings = searchParams.get("ratings");
    const [value, setValue] = useState("")
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [search]);
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
            if (ratings) {
                console.log("yes",ratings)
               wpro= wpro.filter((el)=>{
                    if(el.ratings==Number(ratings)){
                        return el
                    }
                })
              } 

            setData(wpro)


            setLoading(false)
        }

        getData()
        
        

    },[sort,search,value])
    console.log(searchParams.get("q"))

    return loading?<Loader />:<Box className="container" w="100%" padding={4}>

    <Flex gap={4} >
        <Box w="20%">
            <VStack>
            <Heading textAlign="center">Sort by Price</Heading>
            <HStack mt="16px">
                <Button onClick={()=>{
                    setSearchParams(`?q=${search}&sort=low`)
                }} variant="outline">Low to High</Button>
                <Button  onClick={()=>{
                    setSearchParams(`?q=${search}&sort=high`)


                }} variant="outline">High to Low</Button>
                </HStack>

                <Heading fontSize="2xl" textAlign="center">
              Filter by Ratings
            </Heading>

            <Card w="100%">
              <CardBody>
                  <RadioGroup onChange={(value)=>{
                    setValue(value)
                    setSearchParams(`?q=${search}&ratings=${value}`)
                  }}
                  value={value}>
                    <Stack direction="column">
                      <Radio value="1">1 Star</Radio>
                      <Radio value="2">2 Star</Radio>
                      <Radio value="3">3 Star</Radio>
                      <Radio value="4">4 Star</Radio>
                      <Radio value="5">5 Star</Radio>
                    </Stack>
                  </RadioGroup>
              </CardBody>
            </Card>

            </VStack>
            

        </Box>
        
    <Grid w="80%" templateColumns="repeat(4,1fr)" gap={4}>
        
        {data.map((el)=><ProductCard {...el}/>)}

    </Grid>

    </Flex>
</Box>

}