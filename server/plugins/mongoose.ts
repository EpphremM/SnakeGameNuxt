import mongooseConnection from "../db";
export default defineNitroPlugin(async () => {
  await mongooseConnection.init();

});
