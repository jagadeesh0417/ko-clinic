import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = getPrisma();
    const appointments = await prisma.lead.findMany({
      where: {
        date: { not: null },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(appointments);
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 500 });
  }
}
