import { updateScore } from "../controllers/userConroller";
export default defineEventHandler(async(event)=>{
    if(event.node.req.method==="POST"){
try{
const response= await updateScore(event);
return response;
}catch(error){
    console.log("error in updating in user's score")
    return({
        message:"unable to update user's score"
    })
}
    }else{
        return({
            status:500,
            statusMessage:"fail",
            data:{
                message:"method not allowed"
            }
        })
    }

})