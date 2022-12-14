import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASEURL;

export default class Api{

    constructor(){
    }
    
   async getData(endpoint){

            let res = await axios.get(BASE_URL+endpoint);
            return res.data.items
          
          }


}