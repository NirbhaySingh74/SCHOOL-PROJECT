import { admissionProcessText, missionStatement } from "../utils/text.js";

export const getMissionText = async (req, res) => {
  res.status(200).json({ missionStatement });
};

export const getAdmissionProcessText = async (req, res) => {
  res.status(200).json({ admissionProcessText });
};
