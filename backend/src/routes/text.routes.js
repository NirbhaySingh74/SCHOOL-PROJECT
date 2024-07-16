import express from "express";
import {
  getAdmissionProcessText,
  getMissionText,
} from "../controllers/getText.js";

const router = express.Router();

router.get("/mission", getMissionText);
router.get("/admissiontext", getAdmissionProcessText);

export default router;
