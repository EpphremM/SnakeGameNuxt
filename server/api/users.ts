import { H3Event } from 'h3';
import { users } from '../controllers/userConroller';
export default defineEventHandler(async(event:H3Event)=>{
    if(event.node.req.method==="GET"){
     try{
     const response=await users();
     return response;
     }catch(error){
        console.log("error in finding all users")
        return({
            status:500,
            statusMessage:"fail",
            data:{
                message:"internal server error"
            }
        })
     }
    }else{
        console.log("invalid method");
        return({
            status:405,
            statusMessage:"fail",
            data:{
                message:"method not allowed"
            }
        })
    }
})