import { post } from "@/interfaces";

export async function getPostBySlug(slug: string): Promise<post> {
    const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts/?slug=${slug}`;

      const response = await fetch(url);
      const post: post[] = await response.json();
    
      return post[0];
}