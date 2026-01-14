import { BlogBlock } from "../interface";
import { BlogHeader } from "./BlogHeader";
import { BlogBody } from "./BlogBody";

export const BlogContent = ({ data }: { data: BlogBlock[] }) => {
  return (
    <div>
      <BlogHeader
        author="John Doe"
        avatar="/images/john-doe.jpg"
        date="May 15, 2023"
      />
      <BlogBody body={data} />
    </div>
  );
};
