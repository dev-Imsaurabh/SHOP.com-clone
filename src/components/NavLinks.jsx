import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./cstyles.css"


export default function NavLinks(){

    let navobj = [
        {
            path:"/brands",
            name:"Exclusive Brands"
        },{
        path:"/stores",
        name:"Stores"
    },{
        path:"/deals",
        name:"Deals"
    },{
        path:"/departments",
        name:"Departments"
    },{
        path:"/shopbuddy",
        name:"Shop Buddy"
}]

    let allNav =navobj.map((el)=><NavLink className={({isActive})=>isActive?"active":"unactive"}
    to={el.path}>{el.name}</NavLink>)

    return <Flex justify={{base:"center",lg:"space-around"} } fontSize={{base:"12px",lg:"16px"}}  align="center" gap={{base:4,lg:8}}>

        {allNav}

    </Flex>
}