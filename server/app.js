import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import config from "./config.js";

import authRoutes from "./routes/auth.routes.js";
import informesRoutes from "./routes/informes.routes.js";
import mainRoutes from "./routes/main.routes.js";
import machinesRoutes from "./routes/machines.routes.js";
import adminRoutes from "./routes/admin.routes.js";
const app = express();

app.use(
  cors({
    credentials: true,
    origin: config.frontEnd,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", informesRoutes);
app.use("/api", mainRoutes);
app.use("/api", machinesRoutes);
app.use("/api", adminRoutes);

if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "build", "index.html"));
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

export default app;
