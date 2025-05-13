import strapiService from "@/lib/strapi.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { promoCode } = body;

    const res = await strapiService.checkPromocode(promoCode);

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error checking promocode:", error);
    return NextResponse.json(
      { error: "Failed to check promocode" },
      { status: 500 }
    );
  }
}
