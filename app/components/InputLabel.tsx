import React from "react";

interface HeadingProps {
  title: string;
  className?: string;
}

export const InputLabel = ({ title, className }: HeadingProps) => {
  return (
    <h2
      className={`input-label ${className || ""}`}
    >
      {title}
    </h2>
  );
};
