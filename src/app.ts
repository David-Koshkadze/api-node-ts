import express from "express";
import config from "config";

import logger from "./utils/logger";
import connect from "./utils/connect";
import routes from "./routes";

const app = express();

const PORT = config.get<number>("port");

app.listen(PORT, async () => {
  logger.info(`App is running on port ${PORT}`);

  await connect();

  routes(app)
});
