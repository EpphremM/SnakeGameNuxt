import mongoose, { Connection } from "mongoose";

const init = async (): Promise<Connection | null> => {
  const config = useRuntimeConfig();
  let dbUrl = config.atlasUrl;
  const dbPassword = config.atlasPassword;
  const db = dbUrl.replace("<db_password>", dbPassword);

  try {
    console.log(db);
    const conn = await mongoose.connect(
      db,
      {
        dbName: "snake_game",
        rejectUnauthorized: false,
      }
    );
    console.log("DB connection successful!");
    return conn.connection;
  } catch (error) {
    console.error(
      "DB connection error:",
      error instanceof Error ? error.message : error
    );
    return null;
  }
};

const close = async (): Promise<void> => {
  try {
    await mongoose.connection.close();
    console.log("DB connection closed successfully.");
  } catch (error) {
    console.error(
      "Error closing DB connection:",
      error instanceof Error ? error.message : error
    );
  }
};

const mongooseConnection = {
  init,
  close,
};
export default mongooseConnection;
