"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { CommentInterface } from "../interface";

interface CommentListProps {
  comments: CommentInterface[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <>
      {comments.map((el) => (
        <div key={el.id} className="comment">
          <div className="comment-content">
            <div className="comment-avatar">
              <Image
                src="/icon/icon2.png"
                alt={el.name}
                fill
                className="comment-avatar-img"
              />
            </div>

            <div className="comment-body">
              <div className="comment-header">
                <div className="comment-name-rating">
                  <p className="comment-name">{el.name}</p>

                  <div className="comment-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < el.rating
                            ? "comment-star comment-star--active"
                            : "comment-star"
                        }
                      />
                    ))}
                    <span className="comment-rating-value">
                      ({el.rating.toFixed(1)})
                    </span>
                  </div>
                </div>

                <p className="comment-date">{el.date}</p>
              </div>

              <p className="comment-text">{el.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
