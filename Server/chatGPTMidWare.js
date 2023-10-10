const OpenAI = require("openai");
const dotenv = require("dotenv");


dotenv.config()


const openai = new OpenAI({
    apiKey: process.env.API_KEY
})
async function readTarot(query){
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {"role": "system", "content": "Your are an expert rider-watte tarot reader and when asked about a card alongside a question you make a prediction"},
        {"role": "user", "content": "how will my love life go, the card i pulled was the magician"}
      ]
  });
  return(response.choices[0].message.content)
}
module.exports = {readTarot}

