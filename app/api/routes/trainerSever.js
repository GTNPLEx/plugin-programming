const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/trainer', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Create a schema and model for storing messages
const messageSchema = new mongoose.Schema({
  userName: String,
  message: String,
  age: Number,
});

const Message = mongoose.model('Message', messageSchema);

// Fetch message from OpenAI API
const fetchMessageFromOpenAI = async (userName, age) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Hello ${userName}, I'm Eva. Your age is ${age}.`,
      max_tokens: 50,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
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
    const messages = await Message.find();
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

    // Save message to MongoDB
    await Message.create({ userName, message, age });

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
