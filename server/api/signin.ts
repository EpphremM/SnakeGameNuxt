import { signin } from "../controllers/userConroller";
export default defineEventHandler(async(event)=>{
    if(event._method==="POST"){
    const {username,password}= await readBody(event);
    try{
    const response= await signin(username,password);
    return response;


    }catch(error){
        return({
            status:500,
            statusMessage:"fail",
            data:{
                error:error
            }
        })
    }

}else{
    return({
        status:405,
        statusMessage:"fail",
        data:{
            message:"method not allowed"
        }
    })
}
})