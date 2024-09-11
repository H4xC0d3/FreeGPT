// npm install openai
import OpenAI from "openai";
const openai = new OpenAI({
    baseURL: "http://gpt.catway.org/v1",
    apiKey: "sk-r4khWXD9FY4NkC7GO4jWfTSuB3G3cdS0yyBXKnO9F7Pjm4YC", 
});

const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",  // or use "gpt-4-all"
    messages: [
        { role: "user", content: "Are you gpt-3?" },
    ],
});

console.log(completion.choices[0].message.content);
