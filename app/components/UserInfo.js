"use client"

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


export default function UserInfo() {

    const {data:session} = useSession();
    return (
        <>
          <div className="flex items-center justify-center min-h-screen bg-slate-400">
            <div className="flex-col justify-center py-6 text-center rounded-lg shadow-xl h-80 w-96 bg-slate-500">
                <div className="h-10">
                    Name: <span className="font-bold">{session?.user?.name}</span>
                </div> 
                <div className="h-10" >
                    email: <span className="font-bold">{session?.user?.email}</span>
                </div>
                <div>
                    <button onClick={() => signOut()} className="p-2 bg-red-600 rounded-xl">Log Out</button>
                </div>
            </div>
          </div>
        </>
    );
}