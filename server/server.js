import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/config.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

await connectDB();
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  return res.send("API WORKING");
});

app.listen(PORT, () => console.log("Server is  running  on port " + PORT));
