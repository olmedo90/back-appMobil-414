import app from "./src/app.js";
import { connectDB } from "./src/db.js";
import 'dotenv/config'
async function main() {
  try {
    await connectDB();
    app.listen(process.env.PORT);
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
    // console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();

export default main;