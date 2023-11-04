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

    const { topic, keywords, description } = body;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You act as an expert YouTube hashtags generator. The title of the YouTube video is ${topic} and you will create YouTube hashtags with the # sign and create only 10 hashtags.a video description is based on the following context:"${description}". A hashtag consists of only 1 to 2 keywords. Be sure to create the main hashtags based on trends, interesting and keywords used by famous YouTube channels.The keywords are ${keywords} ONLY AND ONLY RESPOND WITH HASHTAGs.`,
        },
      ],
      model: "gpt-3.5-turbo",
      /* stream: true, */
    });
    /* const stream = OpenAIStream(completion);
    return new StreamingTextResponse(stream); */
    return NextResponse.json(completion.choices[0].message.content);
  } catch (error) {
    console.log("[HASHTAG]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
