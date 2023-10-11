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
        {"role": "system", "content": `Your are an expert rider-watte tarot reader you'll be asked to do a reading using the celtic cross spread. 
        Respond using json with 12 total key-value pairs  where there is a  key for each card (the key should either be only the number of the card or the word significator if it's the significator), where the value is the interpratation of the card
        given its position and the question, and the 12th key is the prediction and the value is the prediction taking into account all the cards their position and the question`},
        {"role": "user", "content": `Question is: ${query.question}, Significator is:${query.significator}, Card 1 is:${query.c1}, Card 2 is:${query.c2}
        , Card 3 is:${query.c3}, Card 4 is:${query.c4}, Card 5 is:${query.c5}, Card 6 is:${query.c6}, Card 7 is:${query.c7}, Card 8 is:${query.c8}, 
        , Card 9 is:${query.c9}, Card 10 is:${query.c10}`}
      ]
  });
  return(response.choices[0].message.content)
}
module.exports = {readTarot}

