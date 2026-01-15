import React from "react";

export const BannerImage = ({
  imageSrc = "/hero.png",
}: {
  imageSrc?: string;
}) => {
  return (
    <section
      className="banner-section-image banner-image-bg"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    />
  );
};
