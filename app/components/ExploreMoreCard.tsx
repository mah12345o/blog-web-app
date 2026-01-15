import React from "react";
import { NextFillImage } from "./image/NextFillImage";
import Link from "next/link";

export const ExploreMoreCard = ({
  authorName,
  content,
  date,
  slug,
  image,
}: {
  authorName: string;
  content: string;
  date: string;
  slug: string;
  image: string;
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link href={`/blog/${slug}`}>
        <div className="explore-card-content">
          <div className="explore-card-image-container">
            <NextFillImage
              alt="Image"
              src={image}
              className="article-card-image"
            />
          </div>

          <div className="explore-card-info">
            <div className="explore-card-meta">
              <span className="explore-card-author">{authorName}</span>
              <div className="explore-card-date">
                <span>| </span>
                <span>{date}</span>
              </div>
            </div>

            <p className="explore-card-title">{content}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
