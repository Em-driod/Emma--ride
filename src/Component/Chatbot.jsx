import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("https://emma-ride.onrender.com/chat", {
        message: input,
      });

      const botMessage = { text: response.data.response, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { text: "Error: Unable to connect", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-xl font-bold text-center mb-3">nuel AI</h2>

      {/* Chat Display */}
      <div className="h-80 overflow-y-auto bg-gray-800 p-3 rounded-lg border border-gray-700 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`px-3 py-2 rounded-lg max-w-[80%] ${
                msg.sender === "user" ? "bg-blue-600 text-right" : "bg-gray-700"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        {loading && <p className="text-gray-400 text-center">Oga wait, I dey think...</p>}
      </div>

      {/* Input Field */}
      <div className="mt-3 flex">
        <input
          type="text"
          className="flex-grow px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-l outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Don't be shy, ask..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

