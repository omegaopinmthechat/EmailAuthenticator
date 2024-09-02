import React from "react";
import Signup from "@/app/signup2/Signup";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }

  return <Signup />;
};

export default page;
