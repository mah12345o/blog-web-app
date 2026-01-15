"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { guidesData } from "../const";


export default function TourGuides() {
  return (
    <div className="tour-guides-container">
      <div className="tour-guides-list">
        {guidesData?.map((guide) => (
          <div key={guide?.id}>
            <div className="tour-guide-card">
              <div className="tour-guide-avatar">
                <Image
                  src={guide?.image}
                  alt={guide?.name}
                  fill
                  className="tour-guide-avatar-img"
                />
              </div>
              <div>
                <p className="tour-guide-name">
                  {guide?.name}
                </p>
                <div className="tour-guide-location-section">
                  <MdLocationOn style={{ marginRight: "0.25rem" }} />
                  <span className="tour-guide-location-text">
                    {guide?.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="tour-guide-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.round(guide.rating)
                      ? "tour-guide-star-active"
                      : "tour-guide-star-inactive"
                  }
                />
              ))}
              <span className="tour-guide-rating-value">
                ({guide.rating.toFixed(1)})
              </span>
            </div>

            <hr className="tour-guide-divider" />
          </div>
        ))}
      </div>
    </div>
  );
}
