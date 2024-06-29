import Link from "next/link";
import React from "react"

const Navbar = () => {
  return (
    <div className="text-4xl font-bold bg-orange-200 font-means px-6 py-4 flex justify-between">
      <div className="flex items-center gap-2">
        <span><span className="text-white ml-1 bg-orange-500 p-1 rounded-md">Be</span>nzenelabs&Co.</span>
      </div>
      <div className="flex gap-4 text-2xl justify-center items-center">
        <p>About Us</p>
        <p>Our Team</p>
        <p>Our Work</p>
        <p>Careers</p>
        
      </div>

    </div>
  )
}

export default Navbar;