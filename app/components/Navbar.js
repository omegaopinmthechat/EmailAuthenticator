"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-1 bg-cyan-900">
        <Link href="/" className="font-bold">Authenticator</Link>
        <div className="flex space-x-2">
          <Link className="p-1 font-bold hover:bg-slate-900 rounded-xl bg-slate-700" href="/login">
            Login
          </Link>
          <Link className="p-1 font-bold rounded-xl hover:bg-slate-900 bg-slate-700" href="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
