"use client";

import { authors } from "../const";
import Image from "next/image";
import { useState } from "react";
import { NavBtn } from "./NavBtn";

export const AboutAuthorCarousel = () => {
  const [index, setIndex] = useState(0);
  const author = authors[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % authors?.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + authors?.length) % authors?.length);
  };

  return (
    <div className="author-carousel-wrapper">
      {/* Author Info */}
      <div className="author-info-section">
        <h2 className="author-name-heading">
          About {author?.name}
        </h2>
        <div className="author-image-container">
          <div className="author-avatar-wrapper">
            <Image
              src={author?.image}
              alt={author?.name}
              fill
              className="author-avatar-img"
            />
          </div>
        </div>

        <p className="author-bio">
          {author?.bio}
        </p>
      </div>

      {/* Previous/Next Blog Nav */}
      <div className="author-nav-section">
        <NavBtn onClick={handlePrev} title="Previous" isPrevBtn />
        <NavBtn onClick={handleNext} title="Next" />
      </div>
    </div>
  );
};
