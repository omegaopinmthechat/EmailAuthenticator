"use client";
import React from "react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const page = () => {
  //Clearing the input box after use
  let ref = useRef();

  //Making useStates for login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Form submit function
  const handleSubmit = async (e) => {
    e.preventDefault(); //This step is done to stop the reload of the page when hit SignUp button

    if(!name || !email || !password) {
      setError("Please fill all the fields");
      return;
    }
    try {
      const res = await fetch('api/signup/[...nextauth]', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify ({
          name, email, password
        })
      });

      if(!res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User sign up failed")
      }
    }catch(err) {
      console.log("Error", err)
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-400">
        <div className="flex justify-center text-center rounded-lg h-80 w-96 bg-slate-500">
          <form onSubmit={handleSubmit} className="justify-center" ref={ref}>
            {" "}
            <br></br>
            <div>
              {/*setName onChange to capture response */}
              <input
                onChange={(e) => setName(e.target.value)}
                name="username"
                className="p-1 text-slate-900 rounded-xl"
                type="text"
                placeholder="Username"
              />
            </div>{" "}
            <br></br>
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
                placeholder="Set password"
              />
            </div>{" "}
            <br></br>
            <div>
              <button className="p-1 font-bold text-black bg-yellow-500 rounded-xl">
                Sign Up
              </button>
            </div>{" "}
            <br></br>
            {/*Setting up the error message */}
            {error && (
              <div className="w-auto font-bold bg-red-600 rounded-xl h-7">
                {error}
              </div>
            )}
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
