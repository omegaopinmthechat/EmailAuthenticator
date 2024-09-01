"use client";

import { useRef } from "react";
import { submitAction } from "react";

export default function Home() {
  let ref = useRef();

  return (
    <>
      <div className="justify-center h-56 text-center rounded-lg w-96 bg-slate-500">
        <form
        className="justify-center"
          ref={ref}
          action={(e) => {
            submitAction(e);
            ref.current.reset();
          }}
        >
          <div>
            <input
              name="username"
              className="p-1 text-slate-900 rounded-xl"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              className="p-1 text-slate-900 rounded-xl"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="passeword"
              className="p-1 text-slate-900 rounded-xl"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="password"
              name="cp"
              id="cp"
              className="p-1 text-slate-900 rounded-xl"
              placeholder="Confirm Password"
            />
          </div>
        </form>
      </div>
    </>
  );
}
