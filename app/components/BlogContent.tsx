import data from "@/app/data/data.json";
import { BlogPostInterface } from "../interface";

import { BlogHeader } from "./BlogHeader";
import { CommentsSection } from "./Comments";
import { ExploreMoreCard } from "./ExploreMoreCard";
import { Heading } from "./Heading";
import { RelatedArticles } from "./RelatedArticles";
import TourGuides from "./TourGuides";
import { AboutAuthorCarousel } from "./AboutAuthorCarousel";

export const BlogContent = ({ blogData }: { blogData: BlogPostInterface }) => {
  const exploreMoreData = data?.filter((post) => post?.slug !== blogData?.slug);

  return (
    <div style={{ marginBottom: "3rem" }} className="layout_padding">
      <div className="content-container">
        <div>
          <BlogHeader
            author={blogData?.author?.name}
            avatar={blogData?.author?.avatar}
            date={blogData?.date}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              fontSize: "16px",
              lineHeight: "1.625",
              color: "#10152E",
            }}
          >
            {blogData?.body?.map((block, index) => {
              switch (block?.type) {
                case "quote":
                  return (
                    <div
                      key={index}
                      style={{
                        borderLeft: "4px solid #d1d5db",
                        paddingLeft: "16px",
                        fontStyle: "italic",
                        color: "#1f2937",
                        maxWidth: "768px",
                      }}
                    >
                      {block?.content}
                    </div>
                  );

                case "paragraph":
                default:
                  return (
                    <p
                      key={index}
                      style={{
                        maxWidth: "768px", // max-w-3xl
                      }}
                    >
                      {block?.content}
                    </p>
                  );
              }
            })}
          </div>
          <AboutAuthorCarousel />
          <CommentsSection />
        </div>
        <div>
          <Heading title="Explore more" />
          {exploreMoreData?.map((el) => (
            <ExploreMoreCard
              image={el?.heroImage}
              authorName={el?.author?.name}
              content={el?.title}
              date={el?.date}
              slug={el?.slug}
              key={el?.title}
            />
          ))}
          <div style={{ marginTop: "2rem" }}>
            <Heading title="Tour Guides" />
            <TourGuides />
          </div>
        </div>
      </div>
      <RelatedArticles />
    </div>
  );
};
