
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, password, name } = body

  if (!email || !password || !name) {
    return NextResponse.json({
      message: 'Missing Fields'
    }, { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  })


  if (existingUser) {
    return NextResponse.json(
      { message: 'User exists' },
      { status: 400 }
    )
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.user.create({
    data: {
      name, email, password: hashedPassword
    }
  })

  return NextResponse.json({message: 'User created'})

}