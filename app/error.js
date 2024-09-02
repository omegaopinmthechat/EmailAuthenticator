"use client"

import { useEffect } from 'react'
import Link from 'next/link'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="text-center ">
      <h2>Something went wrong!</h2> <br></br>
      <button
        className="p-1 rounded-xl bg-cyan-600"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button> <br></br> <br></br>
      <Link href='/'
      className="p-1 rounded-xl bg-cyan-600"
      >Go back to Home</Link>
    </div>
  )
}