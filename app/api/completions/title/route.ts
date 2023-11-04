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
          content: `Act as an exceptional YouTube video title creator and writer with over 15 years of experience in creating engaging titles. Your approach includes effective use of clickbait to attract a wide audience. Please provide 5 possible titles for YouTube videos. The videos are centered around the theme of "${topic}" and have a main style that combines humor with an epic twist. The writing style I want you to use is "${styleText}" to ensure the title fits the tone and theme of the video Keywords for the content are "${keywords}". A brief description of the video follows: "${description}". Use emojis to make it more personable. Make sure the titles are eye-catching and able to attract the audience's attention effectively. Only and only provide the titles.`,
        },
      ],
      model: "gpt-3.5-turbo",
      /* stream: true, */
    });

    /* const stream = OpenAIStream(completion);
    return new StreamingTextResponse(stream); */
    return NextResponse.json(completion.choices[0].message.content);
  } catch (error) {
    console.log("[TITLE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
