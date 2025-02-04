"use client";

import { SectionName } from "@/lib/types";
import { createContext, useContext, useState } from "react";

type ActiveSectionContextProviderProps = {
  children : React.ReactNode;
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number;
  setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider(
  {children}: ActiveSectionContextProviderProps
){
  const [ activeSection, setActiveSection ] = useState<SectionName>("About Us");
  const [ timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider> 
  )
} 

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if(context === null){
    throw new Error(
      "useActiveContext must be used within a activeSectionProvider."
    );
  }

  return context;
}

