import Image from "next/image";

interface Props  {
  author: string;
  avatar: string;
  date: string;
};

export const BlogHeader = ({ author, avatar, date }: Props) => {
  return (
    <div className="blog-header">
      {/* Author */}
      <div className="blog-header-author-section">
        <div className="blog-header-avatar">
          <Image src={avatar} alt={author} fill />
        </div>
        <span className="blog-header-author-name">
          {author}
        </span>
      </div>
      {/* Date */}
      <span className="blog-header-date">
        {date}
      </span>
    </div>
  );
};
