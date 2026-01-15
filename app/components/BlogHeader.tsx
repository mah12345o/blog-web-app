import Image from "next/image";

interface Props  {
  author: string;
  avatar: string;
  date: string;
};

export const BlogHeader = ({ author, avatar, date }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: "12px",
        marginBottom: "24px",
      }}
    >
      {/* Author */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "100%",
            overflow: "hidden",
            width: "24px",
            height: "24px",
          }}
        >
          <Image src={avatar} alt={author} fill />
        </div>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#111827",
          }}
        >
          {author}
        </span>
      </div>
      {/* Date */}
      <span
        style={{
          fontSize: "12px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#6b7280",
        }}
      >
        {date}
      </span>
    </div>
  );
};
