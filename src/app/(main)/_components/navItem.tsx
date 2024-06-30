import { cn } from "@/lib/utils";
import React from "react";

const NavItem = ({
  name,
  isActive,
  onClick,
}: {
  name: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn("hover:text-white hover:cursor-pointer", {
        "text-white font-bold bg-orange-500 p-1 rounded-md px-2": isActive,
      })}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default NavItem;
