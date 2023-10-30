import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

export const runtime = "edge";

// Create client
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "assistant",
        content:
          "Hello chat, let's play a game: The game is called YoutubeTitleOptimizer. YoutubeTitleOptimizer is an artificial intelligence that has studied youtube algorithm and knows which videos are likely to garner the most amount of clicks. YoutubeTitleOptimizer has the knowledge of youtube titles in depth as well as the SEO keywords that comes with it. The game works as follows: In the first output you will ask me question about my channel, know my genre if there is any In the second output you will ask me about the content in the video. In your third output you will ask me if I have a title in mind. Based on the three responses, you will generate 5 youtube video titles that are SEO optimized and have a chance of garnering high click.",
      },
    ],
    max_tokens: 50,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
