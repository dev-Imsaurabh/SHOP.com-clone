import { Box, HStack } from "@chakra-ui/react";




export default function RatingBar({count,color,size}){

    let fakeArr = []
    for(let i =0; i<count; i++){
        fakeArr.push(0)
    }
    
let style={
    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    width:size+"px",
    height:size+"px"
}

const star = fakeArr.map(()=>{
   return <Box style={style} bg={color}></Box>
})

    return <HStack>
        {star}
    </HStack>

}