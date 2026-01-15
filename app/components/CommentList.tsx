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
          <div className="comment__content">
            <div className="comment__avatar">
              <Image
                src="/icon/icon2.png"
                alt={el.name}
                fill
                className="comment__avatar-img"
              />
            </div>

            <div className="comment__body">
              <div className="comment__header">
                <div className="comment__name-rating">
                  <p className="comment__name">{el.name}</p>

                  <div className="comment__rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < el.rating
                            ? "comment__star comment__star--active"
                            : "comment__star"
                        }
                      />
                    ))}
                    <span className="comment__rating-value">
                      ({el.rating.toFixed(1)})
                    </span>
                  </div>
                </div>

                <p className="comment__date">{el.date}</p>
              </div>

              <p className="comment__text">{el.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
