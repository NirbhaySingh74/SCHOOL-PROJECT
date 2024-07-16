import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import textRoute from "./routes/text.routes.js";
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//route
app.use("/api", textRoute);
