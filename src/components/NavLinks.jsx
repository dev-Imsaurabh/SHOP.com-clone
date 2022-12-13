import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./cstyles.css"


export default function NavLinks(){

    let navobj = [{
        path:"/stores",
        name:"Stores"
    },{
        path:"/shoptravel",
        name:"SHOP Travel"
    },{
        path:"/departments",
        name:"Departments"
    },{
        path:"/shopbuddy",
        name:"Shop Buddy"
    },{
        path:"/shoplocal",
        name:"SHOP Local"
    }]

    let allNav =navobj.map((el)=><NavLink className={({isActive})=>isActive?"active":"unactive"}
    to={el.path}>{el.name}</NavLink>)

    return <Flex align="center" gap={8}>

        {allNav}

    </Flex>
}