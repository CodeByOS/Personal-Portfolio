"use client";
import React from "react";
import { cn } from "@/lib/utils";

type MagicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function MagicButton({
  title,
  icon,
  position = "left",
  handleClick,
  otherClasses = "",
  className,
  ...rest // ✅ Catch all other props like type, disabled, etc.
}: MagicButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center justify-center gap-2 rounded-full py-2 px-4 text-white transition duration-300 bg-indigo-600 hover:bg-indigo-700",
        otherClasses,
        className
      )}
      {...rest} // ✅ Spread button props here (type, disabled, etc.)
    >
      {position === "left" && icon}
      <span>{title}</span>
      {position === "right" && icon}
    </button>
  );
}
