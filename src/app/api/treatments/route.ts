import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = getPrisma();
    const treatments = await prisma.treatment.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(treatments);
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const treatment = await prisma.treatment.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description,
        shortDescription: body.shortDescription,
        category: body.category,
        image: body.image,
        benefits: body.benefits,
        targets: body.targets || [],
        isFeatured: body.isFeatured || false,
        order: body.order || 0,
      },
    });
    return NextResponse.json(treatment, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create treatment" }, { status: 500 });
  }
}
