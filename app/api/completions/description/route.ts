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

    const { topic, keywords, description, stylePrimary, styleSecondary } = body;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
            Escribe una descripcion atractiva para mi video de youtube. El tema principal del video es sobre ${topic}, las palabras claves son ${keywords}.Este es eel contexto del video. Crea un descripcion atractiva que describa el video, y que sea atractiva.`,
        },
      ],
      model: "gpt-3.5-turbo",
      /*  stream: true, */
    });
    /* const stream = OpenAIStream(completion);
    return new StreamingTextResponse(stream); */
    return NextResponse.json(completion);
  } catch (error) {
    console.log("[DESCRIPTIONhandleInputChange]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
