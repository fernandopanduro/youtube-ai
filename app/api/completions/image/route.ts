import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  try {
    const { user } = auth();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const propmt = await req.json();
    const image = await openai.images.generate({
      prompt: propmt,
      n: 1,
      size: "512x512",
    });

    return NextResponse.json(image.data);
  } catch (error) {
    console.log("[IMAGE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
