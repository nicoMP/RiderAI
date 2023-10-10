const OpenAI = require("openai");
const dotenv = require("dotenv");


dotenv.config()


const openai = new OpenAI({
    apiKey: process.env.API_KEY
})
async function readTarot(query){
    console.log(query)
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {"role": "system", "content": "Your are an expert rider-watte tarot reader you'll be asked to do a reading using the celtic cross spread."},
        {"role": "user", "content": `Question is: ${query.question}, Significator is:${query.significator}, Card 1 is:${query.c1}, Card 2 is:${query.c2}
        , Card 3 is:${query.c3}, Card 1 is:${query.c4}, Card 1 is:${query.c5}, Card 1 is:${query.c6}, Card 1 is:${query.c7}, Card 1 is:${query.c8}, 
        , Card 1 is:${query.c9}, Card 1 is:${query.c10}`}
      ]
  });
  return(response.choices[0].message.content)
}
module.exports = {readTarot}

