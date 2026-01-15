"use client";

import Image from "next/image";
import { relatedArticles } from "../const";


export const RelatedArticles = () => {
  return (
    <div className="layout_padding">
      <h2 className="related-title">Related articles Related articles</h2>
      <div className="related-grid">
        {relatedArticles?.map((item) => (
          <div key={item?.id} className="card">
            <div className="related-card-image-wrapper">
              <Image
                src={item?.image || "/images/default.jpg"}
                alt={item?.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="related-card-info">
              <h3 className="related-card-title">
                {item?.title}
              </h3>
              <p className="related-card-description">
                {item?.description}
              </p>
              <p className="related-card-author">
                By {item?.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
