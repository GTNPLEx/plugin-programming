const express = require('express');
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = 3000;

// Create an instance of Prisma Client
const prisma = new PrismaClient();

// Fetch message from OpenAI API
const fetchMessageFromOpenAI = async (userName, age) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Hello ${userName}, I'm Eva. Your age is ${age}.`,
      max_tokens: 50,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching message from OpenAI:', error);
    throw error;
  }
};

// Set up routes
app.use(express.json());

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await prisma.message.findMany();
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

app.post('/api/messages', async (req, res) => {
  const { userName, age } = req.body;

  if (!userName || !age) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    const message = await fetchMessageFromOpenAI(userName, age);

    // Save message to MongoDB using Prisma Client
    await prisma.message.create({ data: { userName, message, age } });

    res.json({ message: 'Message created successfully' });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to create message' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
