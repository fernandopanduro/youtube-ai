import { auth } from "@clerk/nextjs";
/* import { OpenAIStream, StreamingTextResponse } from "ai";
 */ import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

// export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { user } = auth();

    if (user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { topic, keywords, description, styleText, nameChannel } = body;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
            Act as the best persuasive and descriptive text writer for youtube videos. Write a persuasive and captivating description for my next youtube video. The central topic of this video is "${topic}", and the keywords are "${keywords}". The video description is based on the following context: "${description}". The writing style I want you to use is "${styleText}" to make sure the description fits the tone and theme of the video. Please note that my channel name is "${nameChannel}". Please provide a description that is compelling and engaging to viewers, and make sure it reflects the essence and value of the content provided in the video. Use emojis to be the most pleasant description. Use storytelling to guide the viewer and get them to subscribe. Use a maximum of 200 characters. Only and only respond with the description. Do not use hashtags"`,
        },
      ],
      model: "gpt-3.5-turbo",
      /* temperature: 2, */
      /*  stream: true, */
    });
    /* const stream = OpenAIStream(completion);
    return new StreamingTextResponse(stream); */
    return NextResponse.json(completion.choices[0].message.content);
  } catch (error) {
    console.log("[DESCRIPTIONhandleInputChange]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
