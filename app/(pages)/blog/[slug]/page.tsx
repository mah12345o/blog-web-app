import { Metadata } from "next";
import React from "react";
import data from "../../../data/data.json";
import { notFound } from "next/navigation";
import Hero from "@/app/components/Hero";
import BannerSection from "@/app/components/Banner";


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = data?.find((p) => p.slug === slug);
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
  return data?.map((post) => ({ slug: post?.slug }));
}


export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = data?.find((p) => p.slug === slug);

  if (!post) return notFound();

  return <div>
    <Hero title={post?.title} breadcrumbs={["Home", "Articles", post?.title]} />
    <BannerSection imageSrc={post?.heroImage} />
  </div>;
}
