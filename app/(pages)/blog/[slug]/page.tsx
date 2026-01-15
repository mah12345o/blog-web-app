import { Metadata } from "next";
import data from "@/app/data/data.json";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/Header";
import { BannerImage } from "@/app/components/BannerImage";
import { BlogContent } from "@/app/components/BlogContent";
import { BlogPostInterface } from "@/app/interface";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
 const { slug } = await params;

const posts = data as BlogPostInterface[];

const post = posts?.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "...",
    };
  }

  return {
    title: post.title ?? "Untitled post",
    description: post?.title ?? "...",
  };
}

export function generateStaticParams() {
  const posts = data as BlogPostInterface[];

  return posts?.map((post) => ({
    slug: post.slug,
  }));
}


export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;
  const posts = data as BlogPostInterface[];

  const post = posts?.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div className="mobile-tablet-margin">
      <Header
        title={post?.title}
      />
      <BannerImage imageSrc={post?.heroImage} /> 
      <BlogContent blogData={post} />
    </div>
  );
}
