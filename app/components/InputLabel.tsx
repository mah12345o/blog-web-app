import React from "react";

interface HeadingProps {
  title: string;
  className?: string;
}

export const InputLabel = ({ title, className }: HeadingProps) => {
  return (
    <h2
      style={{
        fontSize: "18px",
        color: "#3E3232",
        fontWeight: 500,
        marginBottom: "12px",
      }}
      className={className}
    >
      {title}
    </h2>
  );
};
