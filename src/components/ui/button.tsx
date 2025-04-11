import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "default" | "pink";
}

export const Button: React.FC<ButtonProps> = ({ className = "", children, variant = "default", ...props }) => {
  const base = "font-medium rounded-2xl px-6 py-3 transition shadow-md";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    pink: "bg-[#FF4D8A] text-white hover:bg-[#e43e78]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
