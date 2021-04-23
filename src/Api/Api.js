import axios from "axios";
const url=`https://api.unsplash.com/photos/random/?client_id=8gT3u1wO_VM_C2G2TXH2-7KFkA5DjdT0BHxRnfmoWKQ`;

export const fetchData = async ()=>
{
    try{

        const {data} = await axios.get(url);
        console.log(data);
        return data;     
       }
    catch(error)
    {
        console.log(error);
    }
}

export default {};