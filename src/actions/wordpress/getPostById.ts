import { post } from "@/interfaces";

export async function getPostById(id: string): Promise<post> {
    const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts/${id}`;

      const response = await fetch(url);
      const post: post = await response.json();
    
      return post;
}