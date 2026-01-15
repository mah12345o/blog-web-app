"use client";

import dynamic from "next/dynamic";
import { useState, useTransition } from "react";
import {
  BsChatDots,
  BsEmojiFrown,
  BsEmojiHeartEyes,
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsEmojiSmile,
} from "react-icons/bs";
import { Heading } from "./Heading";
import { InputLabel } from "./InputLabel";
import { CommentInterface } from "../interface";
// dynamic import
const CommentList = dynamic(
  () => import("../components/CommentList").then((mod) => mod.CommentList),
  {
    ssr: false,
    loading: () => <p>Loading comments...</p>,
  }
);

export const CommentsSection = () => {
  const [comments, setComments] = useState<CommentInterface[]>([
    {
      id: 1,
      name: "Kang Haerin",
      email: "haerin@example.com",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      rating: 5,
      avatar: "/icon/icon1.png",
      date: "22 Jul 2022",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });

  const [emojiRating, setEmojiRating] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.comment) return;

    const newComment: CommentInterface = {
      id: Date.now(),
      ...form,
      rating: emojiRating || 4,
      avatar: "/icon/icon2.png",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    startTransition(() => {
      setComments((prev) => [newComment, ...prev]);
      setForm({ name: "", email: "", comment: "", rating: 0 });
      setEmojiRating(0);
    });
  };

  return (
    <div className="comments-section">
      <div className="comment-delimiter">
        <div className="comment-delimiter-line" />
        <Heading title="Comments" />
      </div>
      {isPending && (
        <p className="comment-pending-message">Updating comments...</p>
      )}

      <CommentList comments={comments} />

      <div className="comment-delimiter">
        <div className="comment-delimiter-line" />
        <Heading title="Add A Comment" />
      </div>

      <form onSubmit={handleAddComment}>
        <div className="comment-inputs">
          <div className="comment-form-section">
            <div className="comment-input-full-width">
              <InputLabel title="Name" />
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="comment-input-field"
                required
              />
            </div>
            <div className="comment-input-full-width">
              <InputLabel title="Email" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="comment-input-field"
              />
            </div>
          </div>
          <div className="comment-textarea-stye">
            <InputLabel title="Comment" />
            <textarea
              placeholder="Search Anything..."
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              className="comment-textarea-field"
              required
            />
          </div>
        </div>

        {/* Emoji Rating */}
        <div className="rating-btn-submit-btn-grp">
          <div className="rating-btns">
            <p className="comment-rating-label">
              Rate The Usefulness Of The Article
            </p>
            <div className="comment-rating-container">
              <button
                type="button"
                className={emojiRating === 1 ? "active-btn" : "inactive-btn"}
                onClick={() => setEmojiRating(1)}
              >
                <BsEmojiFrown />
                {emojiRating == 1 ? "Very bad" : ""}
              </button>
              <button
                type="button"
                className={
                  emojiRating === 2 ? "active-btn-2" : "inactive-btn-2"
                }
                onClick={() => setEmojiRating(2)}
              >
                <BsEmojiNeutral />
                {emojiRating == 2 ? "Bad" : ""}
              </button>
              <button
                type="button"
                className={
                  emojiRating === 3 ? "active-btn-3" : "inactive-btn-3"
                }
                onClick={() => setEmojiRating(3)}
              >
                <BsEmojiSmile />
                {emojiRating == 3 ? "Average" : ""}
              </button>
              <button
                type="button"
                className={
                  emojiRating === 4 ? "active-btn-4" : "inactive-btn-4"
                }
                onClick={() => setEmojiRating(4)}
              >
                <BsEmojiHeartEyes />
                {emojiRating == 4 ? "Nice" : ""}
              </button>
              <button
                type="button"
                className={
                  emojiRating === 5 ? "active-btn-5" : "inactive-btn-5"
                }
                onClick={() => setEmojiRating(5)}
              >
                <BsEmojiLaughing />
                {emojiRating == 5 ? "Good" : ""}
              </button>
            </div>
          </div>

          <button type="submit" disabled={isPending} className="submit-btn">
            <BsChatDots className="size-4" /> Send Comments
          </button>
        </div>
      </form>
    </div>
  );
};
