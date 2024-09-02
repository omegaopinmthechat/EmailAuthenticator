"use client";
import React from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  //Clearing the input box after use
  let ref = useRef();

  //Using states to store the value in input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if(res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");

    } catch (err) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-400">
        <div className="flex justify-center text-center rounded-lg h-80 w-96 bg-slate-500">
          <form onSubmit={handleSubmit} className="justify-center" ref={ref}>
            {" "}
            <br></br>
            <div className="font-bold ">Login</div> <br></br>{" "}
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="passeword"
                className="p-1 text-slate-900 rounded-xl"
                placeholder="Password"
              />
            </div>{" "}
            <br></br>
            <div>
              {/*Setting up the error message */}
              {error && (
                <div className="w-auto font-bold bg-red-600 rounded-xl h-7">
                  {error}
                </div>
              )}{" "}
              <br></br>
            </div>
            <div>
              <button className="p-1 font-bold text-black bg-yellow-500 rounded-xl">
                Login
              </button>
            </div>{" "}
            <br></br>
            <div>
              <span className="cursor-default">
                Sign Up if you are new here:{" "}
              </span>
              <Link href="/signup" className="underline">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
