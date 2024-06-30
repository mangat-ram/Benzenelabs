"use client"

import { Button } from "@/components/ui/button";
import React, { useState } from "react"
import NavItem from "./navItem";


const Navbar = () => {

  const items = ["About Us","Our Products","Our Team","Our Work","Careers"];
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <div className="text-3xl font-bold bg-orange-200 font-means px-6 py-4 flex justify-between">
      <div className="flex items-center gap-2">
        <span><span className="text-white ml-1 bg-orange-500 p-1 rounded-md">Be</span>nzenelabs&Co.</span>
      </div>
      <div className="flex gap-4 text-xl text-zinc-700 justify-center items-center">
        {items.map((item) => (
        <NavItem
          key={item}
          name={item}
          isActive={activeItem === item}
          onClick={() => handleItemClick(item)}
        />
      ))}
        <Button className="text-white text-xl bg-orange-500 font-bold hover:text-white hover:bg-orange-600" variant="outline">Contact Us</Button>
      </div>

    </div>
  )
}

export default Navbar;