import express from "express";
import { getUserDetails, getUsers } from "../controllers/githubController.js";

const router = express.Router();

router.route("/").post(getUsers);
router.route("/:username").post(getUserDetails);

export default router;
