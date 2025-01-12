import { post } from "@/interfaces";

import { MainNews, PostImage } from "@/components";
import Link from "next/link";

export default async function Home() {
  const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts`;
  const req = await fetch(url);
  const posts: post[] = await req.json();

  return (
    <>
      <MainNews />
      <div className="lg:grid grid-cols-4 fade-in">
        {posts.map((post) => (
          <div key={post.id} className="px-3 mb-2">
            <Link href={`/${post.slug}`}>
              <PostImage idImage={post.featured_media} />
              <h2
                className="font-bold text-sm"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
