require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Anthropic = require("@anthropic-ai/sdk");

const app = express();

app.use(cors());
app.use(express.json({ limit: "20mb" }));

console.log("Claude Key Loaded:", !!process.env.CLAUDE_API_KEY);

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({
        reply: "Message required",
      });
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    res.json({
      reply: response.content[0].text,
    });

  } catch (error) {
    console.error("Claude Error:", error);

    res.status(500).json({
      reply: "Claude API Error",
      error: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Arduino AI Server Running");
});

app.listen(3000, () => {
  console.log("✅ Server Running On Port 3000");
});
console.log(process.env.CLAUDE_API_KEY);