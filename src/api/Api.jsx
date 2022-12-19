import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASEURL+process.env.REACT_APP_PORT;

export default class Api{

    constructor(){
    }
    
   async getProductsData(endpoint){

            let res = await axios.get(BASE_URL+process.env.REACT_APP_PRODUCTS+endpoint);
            return res.data.items
          
          }

          async getSearchData(){

            let res = await axios.get(BASE_URL+process.env.REACT_APP_PRODUCTS);
            return res.data
          
          }

    async setData(data,endpoint){
      let res = await axios(BASE_URL+endpoint,{
        method: 'post',
        data:data
      })
      return res

    }

    async getData(endpoint){
      let res = await axios(BASE_URL+endpoint)
      return res
    }
    async patchData(data,endpoint){
      let res = await axios(BASE_URL+endpoint,{
        method: 'put',
        data:data
      })
      return res

    }

    async patchData1(data,endpoint){
      let res = await axios(BASE_URL+endpoint,{
        method: 'patch',
        data:data
      })
      return res

    }

}