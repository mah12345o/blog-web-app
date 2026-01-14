import React from "react";

export const BannerSection = ({
  imageSrc = "/hero.png",
}: {
  imageSrc?: string;
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        height: "400px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};
