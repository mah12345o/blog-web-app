import Image from "next/image";

type Props = {
  author: string;
  avatar: string;
  date: string;
};

export const BlogHeader = ({ author, avatar, date }: Props) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
      
      {/* Author */}
      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt={author}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-900">
          {author}
        </span>
      </div>

      {/* Date */}
      <span className="text-xs tracking-widest uppercase text-gray-500">
        {date}
      </span>
    </div>
  );
};
