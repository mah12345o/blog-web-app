import { Metadata } from "next";
import React from "react";
import data from "@/app/data/data.json";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/Hero";
import { BannerSection } from "@/app/components/Banner";
import { BlogContent } from "@/app/components/BlogContent";
import { BlogPostInterface } from "@/app/interface";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const data1 = data as BlogPostInterface[];

  const post = data1?.find((p) => p.slug === slug);
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
  const data1 = data as BlogPostInterface[];
  return data1?.map((post) => ({ slug: post?.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data1 = data as BlogPostInterface[];

  const post = data1?.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div>
      <Header
        title={post?.title}
        breadcrumbs={["Home", "Articles", post?.title]}
      />
      <BannerSection imageSrc={post?.heroImage} />\
      <BlogContent data={post?.body} />
    </div>
  );
}
