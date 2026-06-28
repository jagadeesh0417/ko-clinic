import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        country: body.country,
        clinic: body.clinic,
        treatment: body.treatment,
        date: body.date,
        time: body.time,
        message: body.message,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry. Our team will contact you shortly.",
      lead,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
