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
    <div className="blog-content-container layout_padding">
      <div className="content-container">
        <div>
          <BlogHeader
            author={blogData?.author?.name}
            avatar={blogData?.author?.avatar}
            date={blogData?.date}
          />
          <div className="blog-body">
            {blogData?.body?.map((block, index) => {
              switch (block?.type) {
                case "quote":
                  return (
                    <div
                      key={index}
                      className="blog-quote"
                    >
                      {block?.content}
                    </div>
                  );

                case "paragraph":
                default:
                  return (
                    <p
                      key={index}
                      className="blog-paragraph"
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
          <div className="blog-explore-margin">
            <Heading title="Tour Guides" />
            <TourGuides />
          </div>
        </div>
      </div>
      <RelatedArticles />
    </div>
  );
};
