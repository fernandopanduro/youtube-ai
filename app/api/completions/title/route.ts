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
          content: `Actua como el mejor de creador y escritor de titulos para videos de youtube, tienes 15 años creadondo videos y titulos atractivos para las personas, utilizas mucho clickbait para atraer muchas personas a tus videos. Dame 5 posibles titulos para videos de youtube. El video trata de ${topic}, utiliza un estilo primario ${stylePrimary}, y con un toque de estilo ${styleSecondary}. Las keywords principales de lo que trata el video es ${keywords}. Una breve descripcion del video es esta ${description}`,
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
