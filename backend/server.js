import express from "express";
import axios from "axios";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI ='mongodb+srv://sheenleen2:1805ema01@cluster0.ulqz4.mongodb.net/'
const GEMINI_API_KEY = 'AIzaSyBUHKun0ofNXC4c57lWM7VwVA5627BdCsI';

console.log("MONGO_URI:", MONGO_URI ? "✅ Loaded" : "❌ Not Found");
console.log("GEMINI_API_KEY:", GEMINI_API_KEY ? "✅ Loaded" : "❌ Not Found");

(async function () {
  try {
    console.log("✅ MongoDB Connecting...");
    await mongoose.connect(MONGO_URI, {});
    console.log("✅ MongoDB Connected.");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
})();

const chatSchema = new mongoose.Schema({
  message: String,
  response: String,
  timestamp: { type: Date, default: Date.now },
});
const Chat = mongoose.model("Chat", chatSchema);


async function fetchGeminiResponse(message) {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${'AIzaSyBUHKun0ofNXC4c57lWM7VwVA5627BdCsI'}`,
      {
        contents: [{ parts: [{ text: message }] }],
      }
    );

    return response.data.candidates[0]?.content?.parts[0]?.text || "No response";
  } catch (error) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    throw new Error("Failed to fetch response from Gemini API");
  }
}

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const botResponse = await fetchGeminiResponse(message);

    const chatEntry = new Chat({ message, response: botResponse });
    await chatEntry.save();

    res.json({ response: botResponse });
  } catch (error) {
    console.error("❌ Error processing request:", error.message);
    res.status(500).send("Error processing request");
  }
});

       app.get("/",
        async function (params) {
          res.send("Hello from  server")
        }
       )
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
