import { FeaturedMedia } from "@/interfaces";

export async function getFeaturedMediaById(id: number) {
  const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/media/${id}`;

  const response = await fetch(url);
  const featuredMedia: FeaturedMedia = await response.json();

  return featuredMedia;
}
