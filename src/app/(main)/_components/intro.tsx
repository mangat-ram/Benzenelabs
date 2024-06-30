"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Intro = () => {
  return (
    <section
      className="flex items-center justify-around font-means scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.h1 
              className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-[2.7rem]"
              initial={{ opacity:0, y: 100 }}
              animate={{ opacity:1, y:0 }}
            >
                <span className="font-bold">Precision Software Engineering</span><br/>
                <span className="font-bold">and Future-Ready Solutions</span><br/>
                <span className="font-bold">for Modern Businesses</span>
            </motion.h1>
            <motion.div 
              className="flex gap-4 font-spac font-extrabold"
              initial={{ opacity:0, y: 100 }}
              animate={{ opacity:1, y:0 }}  
            >
              <Button size="lg" className="text-xl hover:bg-orange-600 bg-orange-500">Our Products</Button>
              <Button size="lg" variant="ghost" className="text-xl border-2 border-orange-400 text-white hover:text-white hover:bg-orange-500">Contact Us</Button>
            </motion.div>
        </div>
      </div>
        <motion.div 
          className="bg-white rounded-[50px] shadow-yellow-200 shadow-md"
          initial={{ opacity:0, y: 100 }}
          animate={{ opacity:1, y:0 }}
        >
          <Image 
            src="/illus/header.png"
            alt="BoyImage"
            quality={100}
            width={350}
            height={350}
          />
        </motion.div>
    </section>
  )
}

export default Intro;