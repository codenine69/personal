import express from "express";
import cors from "cors";
import morgan from "morgan";
import { vax } from "./config";


// ROUTES

import personalRoutes from "./api/personal/personal.routes";

//server app
const app = express();

const port = vax.PORT
app.listen(port, () => {
  console.log(`🔥  🚀  server runn port ➡️ ... ${port} 😃  ✔️`);
});

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/personal", personalRoutes);

