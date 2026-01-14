import React from "react";

export const Heading = ({ title }: { title: string }) => {
  return (
     <h2
        style={{
          marginBottom: "1.8rem",
          color: "#10152E",
          fontSize: "1.25rem",
          fontWeight: 600,
        }}
      >
        {title}
      </h2>
  );
};
