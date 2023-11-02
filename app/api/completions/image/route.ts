import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  try {
    const { user } = auth();

    if (user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { topic, keywords, description, stylePrimary, styleSecondary } = body;
    const image = await openai.images.generate({
      prompt: `${stylePrimary}  de alta calidad de la ${topic}. El fondo de la imagen debe de ser o estar una nebulosa. El personaje o cosa principal debe de ser ${description}, Debe ser un ${styleSecondary}. Las pabras claves de la imagen son ${keywords}`,
      n: 3,
      size: "512x512",
    });

    return NextResponse.json(image.data);
  } catch (error) {
    console.log("[IMAGE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
