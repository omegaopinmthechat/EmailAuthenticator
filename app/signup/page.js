"use client";
import React from "react";
import Link from "next/link";
import { useRef } from "react";

const page = () => {
  let ref = useRef();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-400">
        <div className="flex justify-center text-center rounded-lg h-80 w-96 bg-slate-500">
          <form className="justify-center" ref={ref}>
            {" "}
            <br></br>
            <div>
              <input
                name="username"
                className="p-1 text-slate-900 rounded-xl"
                type="text"
                placeholder="Username"
              />
            </div>{" "}
            <br></br>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                className="p-1 text-slate-900 rounded-xl"
                placeholder="Email"
              />
            </div>{" "}
            <br></br>
            <div>
              <input
                type="password"
                name="password"
                id="passeword"
                className="p-1 text-slate-900 rounded-xl"
                placeholder="Password"
              />
            </div>{" "}
            <br></br>
            <div>
              <button className="p-1 font-bold text-black bg-yellow-500 rounded-xl">
                Sign Up
              </button>
            </div>{" "}
            <br></br>
            <div>
              <span className="cursor-default">Already have an account? </span>
              <Link href="/login" className="underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
