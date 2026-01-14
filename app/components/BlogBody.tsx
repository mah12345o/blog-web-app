// app/components/BlogBody.tsx

import React from "react";
import { BlogBlock } from "../interface";

interface BlogBodyProps {
  body: BlogBlock[];
}

export const BlogBody = ({ body }: BlogBodyProps) => {
  return (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      {body.map((block, index) => {
        switch (block.type) {
          case "quote":
            return (
              <div
                key={index}
                className="border-l-4 border-gray-300 pl-4 italic text-gray-800 max-w-3xl"
              >
                {block.content}
              </div>
            );

          case "paragraph":
          default:
            return (
              <p key={index} className="max-w-3xl">
                {block.content}
              </p>
            );
        }
      })}
    </div>
  );
};
