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
    <div className="  mx-14 bg-gray-900 text-white p-4 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-xl font-bold text-center mb-3">Emmanuel AI </h2>
      
      {/* Chat Display */}
      <div className="h-72 overflow-y-auto bg-gray-800 p-3 rounded-lg border border-gray-700">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <p className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-600" : "bg-gray-700"}`}>
              {msg.text}
            </p>
          </div>
        ))}
        {loading && <p className="text-gray-400">oga wait i dey think...</p>}
      </div>

      {/* Input Field */}
      <div className="mt-3 flex ">
        <input
          type="text"
          className="flex p-2 bg-gray-700 text-white border border-gray-600 rounded-l outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dont be shy , ask ..."
        />
        <button
          onClick={sendMessage}
          className="px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

