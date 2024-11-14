import userModel from "../modelS/user";
import { Iuser } from "../modelS/user";
import { H3Event, sendError, createError } from "h3";

export const findUser = async (username: string) => {
  try {
    const user = await userModel.findOne({ username });
    console.log("founded user is",user);
    return user;
  } catch (error) {
    console.log("there is no user by this user id");
    return "";
  }
};
export const signin = async (username: string, password: string) => {
  try {
    const user = await findUser(username);
    if (!user) {
      return {
        status: 404,
        statusMessage: "fail",
        data: {
          message: "invalid username or password",
        },
      };
    }
    const isvalid = user.password === password;
    if (isvalid) {
      return {
        status: 201,
        statusMessage: "success",
        data: {
          message: "loged in successfully",
          user: user,
        },
      };
    }else{
      return {
        status: 404,
        statusMessage: "fail",
        data: {
          message: "login failed",
        },
      };
    }
    
  } catch (error) {
    console.log("error in signing in");
    return {
      message: "failed",
      error: error,
    };
  }
};

export const signup = async (event: H3Event): Promise<any> => {

  try {
    const body = await readBody(event);
    
    console.log("Username to check:", body.username);

    const user = await findUser(body.username);
    // const user="";
    console.log("Found user:", user);

    if (user) {
      return {
        status: 400,
        statusMessage: "fail",
        data: {
          user:user,
          message: "This username is already registered.",
        },
      };
    }else{
      const newUser: Iuser = new userModel(body);
    console.log(newUser);
      const savedUser = await newUser.save();
      console.log("Saved user data:", savedUser);
  console.log(savedUser);
      return {
        status: 201,
        data: savedUser,
        statusMessage: "success",
      };
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return sendError(
      event,
      createError({
        status: 400,
        statusMessage: "Error creating user.",
      })
    );
  }
};
export const updateScore=async(event:H3Event)=>{
  try{
    const body= await readBody(event);
const user=await userModel.findOneAndUpdate({username:body.username},{highScore:body.highScore},{
  new:true
});
if(!user){
  console.log("user is not found");
  return({
    status:404,
    statusMessage:"fail",
    data:{
      message:"user is not found"
    }
  })
}else{
  console.log("user score updated successfully");
  return({
    status:200,
    statusMessage:"success",
    data:{
      user:user,
      message:"user score is updated successfully"
    }
  })
}
  }catch(error){
    console.log("error in updating user's score");
    return sendError(event,createError({
    status:400,
    statusMessage:"unable to update user's score"
    }))
  }
}
export const users=(async()=>{
  try{

     const user=await userModel.find().sort({highScore:1}).select("-password");
     return({
      status:200,
      statusMessage:"success",
      data:{
        user:user,
        message:"those are avalable users"
      }
     })
  }catch(error){
    console.log("error in listing all users")
    return({
      status:400,
      statusMessage:"unable to get all users",
    })
  }

})