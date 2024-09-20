import express from "express";
import { registerStudent } from "../controllers/studentRegister.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = express.Router();

router.route("/register").post(
  upload.fields([
    {
      name: "profileimage",
      maxCount: 1,
    },
  ]),
  registerStudent
);

export default router
