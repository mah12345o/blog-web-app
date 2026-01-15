import data from "@/app/data/data.json";
import { BlogPostInterface } from "../interface";
import AboutAuthorCarousel from "./AboutAuthorCarousel";
import { BlogHeader } from "./BlogHeader";
import { CommentsSection } from "./Comments";
import { ExploreMoreCard } from "./ExploreMoreCard";
import { Heading } from "./Heading";
import { RelatedArticles } from "./RelatedArticles";
import TourGuides from "./TourGuides";

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
            className="space-y-6 text-gray-700 leading-relaxed"
          >
            {blogData?.body?.map((block, index) => {
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
