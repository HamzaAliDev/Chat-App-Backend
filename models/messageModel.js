import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    media: {
        type: String,
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);
export default Message;