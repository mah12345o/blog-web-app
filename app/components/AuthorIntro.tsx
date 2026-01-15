import React from "react";

export const AuthorIntro = ({ content }: { content: string }) => {
  return (
    <div className="blog-author-intro">
      <p>{content}</p>
    </div>
  );
};
