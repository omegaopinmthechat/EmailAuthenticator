import React from 'react'
import Link from "next/link";

const notfound = () => {
  return (


        <div className ="flex-col justify-center p-2 m-2 text-center ">
            <h2 className="p-2 font-bold ">Not Found</h2><br></br>
            <p className="p-2">Could not find your requested resources</p> <br></br>
            <Link className="p-2 m-2 text-white bg-sky-600 rounded-xl" href="/">Return to Home</Link>
        </div>
  )
}
export default notfound