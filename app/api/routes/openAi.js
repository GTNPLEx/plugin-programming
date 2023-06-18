// pages/api/routes/chat.js
import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

// Set up the OpenAI configuration
const configuration = new Configuration({
  organization: 'org-lqro7rOQYj416cfkkTLBqXxk',
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'POST') {
    const { userInput } = req.body;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'user', content: userInput }
          ],
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
          }
        }
      );

      const assistantReply = response.data.choices[0].message.content;

      res.status(200).json({ reply: assistantReply });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
