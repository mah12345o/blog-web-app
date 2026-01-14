export interface ParagraphBlock {
  type: "paragraph";
  content: string;
}

export interface QuoteBlock {
  type: "quote";
  content: string;
}

export type BlogBlock = ParagraphBlock | QuoteBlock;

export interface BlogPostInterface {
  slug: string;
  title: string;
  date: string;
  heroImage: string;
  body: BlogBlock[];
}
