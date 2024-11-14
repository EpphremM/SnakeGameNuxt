import { signup } from "../controllers/userConroller";
import { H3Event } from 'h3';

export default defineEventHandler(async (event:H3Event) => {
  if (event.node.req.method === "POST") {
    try {
      const response = await signup(event);
      return response;
    } catch (error) {
      console.error("Error during signup :", error);
      return {
        status: 500,
        statusMessage: "fail",
        data: {
          message: "Internal server error",
          error: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  } else {
    return {
      status: 405,
      statusMessage: "fail",
      data: {
        message: "Method not allowed",
      },
    };
  }
});
