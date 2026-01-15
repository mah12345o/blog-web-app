
export interface ParagraphBlock {
  type: "paragraph";
  content: string;
}

export interface QuoteBlock {
  type: "quote";
  content: string;
}


export interface AuthorIntroBlock {
  type: "author_intro";
  content: string;
}

export type BlogBlock = ParagraphBlock | QuoteBlock | AuthorIntroBlock;

export interface BlogPostInterface {
  slug: string;
  title: string;
  author: { name: string; avatar: string };
  date: string;
  heroImage: string;
  body: BlogBlock[];
}

export interface CommentInterface {
  id: number;
  name: string;
  email: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}
