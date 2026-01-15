import React from "react";

export const Heading = ({ title }: { title: string }) => {
  return (
     <h2 className="heading-title">
        {title}
      </h2>
  );
};
