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
            <div
              style={{ position: "relative", width: "100%", height: "14rem" }}
            >
              <Image
                src={item?.image || "/images/default.jpg"}
                alt={item?.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "1rem" }}>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#1a202c",
                  marginBottom: "0.25rem",
                }}
              >
                {item?.title}
              </h3>
              <p
                style={{
                  color: "#4B5563",
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                }}
              >
                {item?.description}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#1F2937",
                }}
              >
                By {item?.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
