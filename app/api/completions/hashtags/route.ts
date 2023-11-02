import { auth } from "@clerk/nextjs";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export const runtime = "edge";

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
          content: `Actúas como un experto generador de hashtags de YouTube. El título del video de YouTube es ${topic} y usted creará hashtags de YouTube con el signo # y creará solo 5 hashtags. Un hashtag consta únicamente de 1 a 2 palabras clave. Asegúrese de crear los hashtags principales basados ​​en las tendencias, que sean interesantes y las palabras clave utilizadas por los canales famosos de YouTube. SOLO Y UNICAMENTE RESPONDE CON LOS HASHTAG.`,
        },
      ],
      model: "gpt-3.5-turbo",
      stream: true,
    });
    const stream = OpenAIStream(completion);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log("[HASHTAG]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
