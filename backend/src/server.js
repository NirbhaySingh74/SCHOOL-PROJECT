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

//Define ADMISSION PROCESS TEXT
const admissionProcessText = `Welcome to Harihar Singh Academy, where we take pride in fostering a dynamic learning environment that empowers students to excel academically, socially, and personally. Our school is committed to providing a holistic education that goes beyond the confines of textbooks, encouraging students to explore their interests and talents. We boast a team of dedicated and qualified educators who are passionate about nurturing the potential within each student. At Harihar Singh Academy, we have consistently achieved remarkable results, with our students excelling in academic pursuits, sports, and various co-curricular activities. Our state-of-the-art facilities include well-equipped classrooms, modern laboratories, a well-stocked library, and expansive sports grounds. We believe in leveraging technology to enhance the learning experience, with smart classrooms and computer labs ensuring a contemporary approach to education. Additionally, our commitment to character development is reflected in various leadership and personality development programs. Join us at Harihar Singh Academy and embark on a journey of academic excellence, personal growth, and a vibrant school community that prepares students for a successful future.`;
// Route to get mission statement
app.get("/mission", (req, res) => {
  res.status(200).json({ missionStatement });
});

app.get("/admissiontext", (req, res) => {
  res.status(200).json({ admissionProcessText });
});
// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
