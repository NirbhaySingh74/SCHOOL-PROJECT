import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Define mission statement text
const missionStatement = `Our positive mission is to combat the roots of societal issues by
addressing illiteracy, which is often considered the creator of all
evils. We are dedicated to achieving this goal by imparting qualitative,
logical, and value-based modern education. Our vision aligns with
nurturing liberal rational humanism, empathy, and togetherness in the
new generations, fostering a community that values education and
understands the importance of shared humanity for an honest prosperity
of both mind and matter.`;

// Route to get mission statement
app.get("/mission", (req, res) => {
  res.json({ missionStatement });
});

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
