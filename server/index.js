import app from "./app.js";
import config from "./config.js";

async function main() {
  try {
    app.listen(config.port);
    console.log(`Listening on port http://localhost:${config.port}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
  } catch (error) {
    console.error(error);
  }
}

main();
