const axios = require('axios'); // Import the axios library

// Your API key from OpenAI
const apiKey = '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';

// Define the API endpoint
const apiUrl = 'https://api.openai.com/v1/chat/completions';

// Input prompt for the model
const prompt = 'Translate the following English text to French:';

// Make a POST request to the OpenAI API
async function generateText() {
  try {
    const response = await axios.post(
      apiUrl,
      {
        model: 'gpt-3.5-turbo', // You can specify 'gpt-4.0' or 'gpt-3.5-turbo'
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // Extract the generated message from the API response
    const generatedMessage = response.data.choices[0].message.content;

    console.log('Generated Message:', generatedMessage);
  } catch (error) {
    console.error('API request failed:', error.message);
  }
}

// Call the function to generate text
generateText();
