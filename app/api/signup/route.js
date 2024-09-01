import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    //hashing the password so we don't see the password
    const hashedPassword = await bcrypt.hash(password, 10); //We will hash the password 10 times

    await connectMongoDB();
    await User.create({name, email, password: hashedPassword}); //This line will store the data as it is in the database


    return NextResponse.json({ message: "Usser Signed up" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error while signing up" },
      { status: 500 }
    );
  }
}
