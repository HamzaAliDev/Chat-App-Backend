import express from "express";
import verifyAuth from "../middlewares/auth.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.get("/users", verifyAuth, getUsersForSidebar);
messageRouter.get("/:id", verifyAuth, getMessages);
messageRouter.post("/send/:id", verifyAuth, sendMessage);

export default messageRouter;